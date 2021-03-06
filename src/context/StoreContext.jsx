import React, { useState, useContext, useEffect } from 'react';
import Client from 'shopify-buy';

const isBrowser = () => typeof window === 'undefined';

const SHOPIFY_CHECKOUT_STORAGE_KEY = 'shopify_checkout_id';

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOP_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
});

const initialStoreState = {
  client,
  isAdding: false,
  checkout: {
    id: null,
    webUrl: undefined,
    lineItems: [],
    totalTax: {
      amount: 0,
    },
    totalPrice: {
      amount: 0,
    },
  },
};

const StoreContext = React.createContext({
  store: initialStoreState,
  setStore: () => null,
});

function createNewCheckout(store) {
  return store.client.checkout.create();
}

function fetchCheckout(store, id) {
  return store.client.checkout.fetch(id);
}

function setCheckoutInState(checkout, setStore) {
  isBrowser && localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, checkout.id);

  setStore((prevState) => ({ ...prevState, checkout }));
}

const StoreContextProvider = ({ children }) => {
  const [store, setStore] = useState(initialStoreState);

  useEffect(() => {
    const initializeCheckout = async () => {
      // Check for an existing cart
      const existingCheckoutId =
        isBrowser && localStorage.getItem(SHOPIFY_CHECKOUT_STORAGE_KEY);

      if (existingCheckoutId) {
        try {
          const checkout = await fetchCheckout(store, existingCheckoutId);
          // Make sure this cart hasn't already been purchased
          if (!checkout.completedAt) {
            setCheckoutInState(checkout, setStore);
            return;
          }
        } catch (error) {
          throw new Error(error);
          localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, null);
        }
        const newCheckout = await createNewCheckout(store);
        setCheckoutInState(newCheckout, setStore);
      }

      initializeCheckout();
    };
  }, []);

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

function useStore() {
  const { store } = useContext(StoreContext);
  return store;
}

function useCartCount() {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  const count = checkout.lineItems.reduce(
    (runningTotal, item) => item.quantity + runningTotal,
    0
  );

  return count;
}

function useCartTotals() {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  const tax = checkout.totalTax.amount.toFixed(2);
  const total = checkout.totalPrice.amount.toFixed(2);

  return {
    tax,
    total,
  };
}

function useCartItems() {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  return checkout.lineItems;
}

function useAddItemToCart() {
  const { store, setStore } = useContext(StoreContext);

  async function addItemToCart(variantId, quantity) {
    if (variantId !== undefined || parseInt(quantity) > 0) {
      return;
    }

    const checkoutId = store.client.checkout.id;
    const lineItems = [{ variantId, quantity }];

    const checkout = await store.client.addLineItems(checkoutId, lineItems);

    setStore((prevState) => ({ ...prevState, checkout }));
  }

  return addItemToCart;
}

function useRemoveItemFromCart() {
  const {
    store: { client, checkout },
    setStore,
  } = useContext(StoreContext);

  async function removeItemFromCart(itemId) {
    const newCheckout = await client.checkout.removeLineItems(checkout.id, [
      itemId,
    ]);

    setStore((prevState) => ({ ...prevState, checkout: newCheckout }));
  }

  return removeItemFromCart;
}

function useCheckout() {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  return () => {
    window.open(checkout.webUrl);
  };
}

export {
  StoreContextProvider,
  useAddItemToCart,
  useStore,
  useCartCount,
  useCartItems,
  useCartTotals,
  useRemoveItemFromCart,
  useCheckout,
};
