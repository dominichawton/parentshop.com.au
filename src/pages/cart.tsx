import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import {
  useCartItems,
  useCartTotals,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCheckout,
} from '../context/StoreContext';
import {
  Flex,
  ListItem,
  UnorderedList,
  Grid,
  Button,
  Text,
  Divider,
  Heading,
} from '@chakra-ui/react';

const CartPage = () => {
  // const {
  //   allShopifyProductVariant: { nodes: variants },
  //   allShopifyProduct: { nodes: products },
  // } = useStaticQuery(graphql`
  //   query {
  //     allShopifyProductVariant {
  //       nodes {
  //         shopifyId
  //         image {
  //           localFile {
  //             childImageSharp {
  //               fluid(maxWidth: 120) {
  //                 ...GatsbyImageSharpFluid_withWebp
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //     allShopifyProduct {
  //       nodes {
  //         handle
  //         variants {
  //           shopifyId
  //         }
  //       }
  //     }
  //   }
  // `);

  const lineItems = useCartItems();
  const { tax, total } = useCartTotals();
  const removeFromCart = useRemoveItemFromCart();
  const checkout = useCheckout();
  const addItemToCart = useAddItemToCart();

  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map((variant) => variant.shopifyId);
    return {
      variants: newVariants,
      handle,
    };
  });

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find((product) => {
      return product.variants.includes(variantId);
    });

    return selectedProduct ? selectedProduct.handle : null;
  }

  function getImageFluidForVariant(variantId) {
    const selectedVariant = variants.find((variant) => {
      return variant.shopifyId === variantId;
    });

    if (selectedVariant) {
      return selectedVariant.image.localFile.childImageSharp.fluid;
    }
    return null;
  }

  const LineItem = ({ item }) => (
    <Grid gap={4} gridTemplateColumns="repeat(4, 1fr)">
      <Flex p={1} borderColor="gray.200" border="1px solid">
        <Img fluid={getImageFluidForVariant(item.variant.id)} />
      </Flex>
      <Flex flexDir="column">
        <Link to={`/product/${getHandleForVariant(item.variant.id)}`}>
          {item.title}
        </Link>
        <UnorderedList mt={2}>
          {item.variant.selectedOptions.map(({ name, value }) => (
            <ListItem key={name}>
              <Text fontWeight="semibold">{name}: </Text>
              {value}
            </ListItem>
          ))}
          <ListItem key="quantity">
            <Text fontWeight="semibold">Quantity: </Text>
            {item.quantity}
          </ListItem>
        </UnorderedList>
      </Flex>
      <Button variant="link" onClick={() => removeFromCart(item.id)}>
        Delete
      </Button>
      <Text fontWeight="semibold">
        ${Number(item.variant.price.amount).toFixed(2)}
      </Text>
    </Grid>
  );

  const emptyCart = (
    <Flex flexDir="column">
      <SEO title="Cart" />
      <Heading>Cart</Heading>
      <Text>Your shopping cart is empty.</Text>
      <Button
        mt={4}
        onClick={() =>
          addItemToCart(
            variants[Math.floor(Math.random() * (variants.length - 1))]
              .shopifyId,
            1
          )
        }
      >
        <span role="img" aria-label="Dice Emoji">
          🎲
        </span>{' '}
        Random item plz
      </Button>
    </Flex>
  );

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <Flex flexDir="column">
      <SEO title="Cart" />
      <Heading>Cart</Heading>
      {lineItems.map((item) => (
        <React.Fragment key={item.id}>
          <LineItem key={item.id} item={item} />
          <Divider my={3} />
        </React.Fragment>
      ))}
      <Flex>
        <Flex p={4} ml="auto">
          <Heading mb={3}>Cart Summary</Heading>
          <Divider />

          <Grid gap={1} gridTemplateColumns="repeat(2, 1fr">
            <Text>Subtotal:</Text>
            <Text ml="auto">{total}</Text>
            <Text>Shipping:</Text>
            <Text ml="auto"> - </Text>
            <Text>Tax: </Text>
            <Text ml="auto">{tax}</Text>
          </Grid>

          <Divider />
          <Grid gap={1} gridTemplateColumns="repeat(2, 1fr)">
            <Text fontWeight="semibold">Estimated Total:</Text>
            <Text fontWeight="semibold" ml="auto">
              {total}
            </Text>
          </Grid>
          <Button mt={4} w="100%" onClick={checkout}>
            Checkout
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartPage;
