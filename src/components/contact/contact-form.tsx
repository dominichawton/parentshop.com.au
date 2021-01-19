import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  Text,
  Textarea,
  Select,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

function ContactForm() {
  return (
    <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Flex justifyContent="center" alignItems="center" mt={8}>
            <Field name="firstName">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.firstName && form.touched.firstName}
                  mr={5}
                >
                  <FormLabel htmlFor="firstName">First name</FormLabel>
                  <Input {...field} id="firstName" placeholder="First name" />
                  <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="lastName">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.lastName && form.touched.lastName}
                >
                  <FormLabel htmlFor="lastName">Last name</FormLabel>
                  <Input {...field} id="lastName" placeholder="Last name" />
                  <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Flex>
          <Field name="email">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                mt={4}
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="phone">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.phone && form.touched.phone}
                mt={4}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Text fontSize=".8rem" color="gray.500">
                    Optional
                  </Text>
                </Flex>
                <Input {...field} id="phone" placeholder="Phone" />
                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="company">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.company && form.touched.company}
                mt={4}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <FormLabel htmlFor="company">Company</FormLabel>
                  <Text fontSize=".8rem" color="gray.500">
                    Optional
                  </Text>
                </Flex>
                <Input {...field} id="company" placeholder="Company" />
                <FormErrorMessage>{form.errors.company}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.message && form.touched.message}
                mt={4}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <FormLabel htmlFor="message">How can we help you?</FormLabel>
                  <Text fontSize=".8rem" color="gray.500">
                    Max. 500 characters
                  </Text>
                </Flex>
                <Textarea
                  {...field}
                  id="message"
                  placeholder="Write your message here"
                />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="discover">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.discover && form.touched.discover}
                mt={4}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <FormLabel htmlFor="discover">
                    How did you hear about us?
                  </FormLabel>
                </Flex>
                <Select {...field} id="discover" placeholder="Select">
                  <option>Word of mouth</option>
                  <option>Google</option>
                  <option>Ad</option>
                  <option>Through my organisation</option>
                  <option>From the TV/Radio</option>
                </Select>
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Flex justifyContent="flex-start" alignItems="center" mt={3}>
            <Button
              mt={4}
              colorScheme="secondary"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
