Feature: Shopping on SauceDemo website

Scenario: User adds items to cart, checks out, and logs out
Given User is on the SauceDemo website
When User logs in with userID "standard_user" and password "secret_sauce"
Then Verify all items are present on the landing page and add all items to cart
When User Navigates to the cart
And User removes "Sauce Labs Bike Light" from the cart
And User clicks Checkout
And User provies name and zip code
And User clicks continue
And User removes "Sauce Labs Bolt T-Shirt" from the Checkout
And User Navigates to the cart
And User clicks Checkout
And User provies name and zip code
And User clicks continue
And User checks Finish if total prices is less than "40" $ or User clicks Cancel Button
When User clicks Back Home Button
Then User should be logged out
