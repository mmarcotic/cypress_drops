## Cypress.io for Drops

For my assignment, I will use Cypress.io to test some parts of the https://app.languagedrops.com site

### What to test

I have decided that for this example, I will focus on what the user could do, when faced with this webapp
They can:
  - continue unlogged
  - sign in
  - log in

#### Continue unlogged

I will create an initial user experience mockup test case, that will take the user through language selection and start the tutorial

#### Sign in

I will create a test case which tests that the user can sign in legally (and test illegal combinations)

#### Log in

I will create a test case which tests that a registered user can log in, when given the correct credentials, and cannot, when given the incorrect ones

------------------------------------------------

For references, I have mostly used the cypress.io documentation, and in some cases, when I needed help, stackoverflow

NOTE: Sorry that the initial commit is in Czech, that's just something that Visual studio did for me ☺

NOTE2: I have had some issues with my definition of logOut(), at approximatelly 50% repro-rate, the test fails on "unhandled promise rejection" and cypress reports that it is not coming from cypress. If you run into it, please, re-run the test.
