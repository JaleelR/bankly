### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  1. Json Web Tokens is information stored in session, Usually used for authentication. JWTS are made up of 3 parts:
   - Header
   - payload
   - signature





- What is the signature portion of the JWT?  What does it do?
  2. Header and Payload Encoded that is signed with secret key. Used to verify identity of signiture






- If a JWT is intercepted, can the attacker see what's inside the payload?
  3. No, You see an Encoded version of the Token itself



- How can you implement authentication with a JWT?  Describe how it works at a high level.
  4. For login to authenticate user Use jwt.sign():
- jwt.sign() creates a token
- jwt.sign() takes 3 args (
  payload - non sensitve data about user, like user id
  secret-key - secret string used to sign token
  jwt-options - optional object for setting making for token )
-  jwt.sign returns a unique token(string) each time it is called. 
-  Token can be used let server know that this user is a authentic and authorized user by sending it to routes and verifying tokens authenticity for every or specific routes
by using jwt.verify()
-   should be used each time for creating and loging in someone with that users creditentials





- Compare and contrast unit, integration and end-to-end tests.
  5. 
 unit testing: small tests that checks for functionality of individual functions or methods. They are simpiler and faster but could be time consuming if you have a large app and won't catch all the bugs if multiple functions are working in unison 

- integration testing: individual components or modules of a system are combined and tested, verifying cohesivness. Can be difficult to find issue if issue arises because of multiple working components togehter
  
- end to end tests: tests applications flow from start to end;
  find alot more bugs from client standpoint but break easily
  with smallest feature change and time consuming


- What is a mock? What are some things you would mock?
  6. A replacement of an object for a test that simulates the same behavior for tests
- Some things you can mock are:
- math.random();
- api calls
- database interations

- What is continuous integration?
  7. The practice of merging in small code changes requently rather than one big change at the end of cycle 


- What is an environment variable and what are they used for?
   8. an enviromental varible outside of applications that holds configuration settings or enviromental info about application. 
   - database connections or sensitve information 


- What is TDD? What are some benefits and drawbacks?
  9. Test Driven Develpment: Wtite tests first, write code nessary to pass, then refactor
 - Benifits are that it will make writing the code easier, its longer write code this way. 
  
- What is the value of using JSONSchema for validation?
  10. Benefits of using JSONschema are 
   - it will ensure correct and complete data 
   - helpful eorrors to frintend/api users. 
   - severs as good documentation so developers can understand whats needed 
 
- What are some ways to decide which code to test?
  11.  
   - Complexity
   - recent changes
   - critical code for app
   - refactored code
   - dependencies
   - security critical code
   - edge cases
   - critical functionality

- What does `RETURNING` do in SQL? When would you use it?
 12.    Returning returns specific columns you want back, You use returing during `INSERT`, `UPDATE`, or `DELETE`  
  
- What are some differences between Web Sockets and HTTP?
13.    -
  - http follows a request response patten. client sends a request and server responds. 
  - Web sockets client and server can send messages independantly at any time

  - stateless protocol(each request is independent) and the connection closes after each req -> resp.
  - connection is persistant and can be reused for multiple messages
- Did you prefer using Flask over Express? Why or why not (there is no right
- 
  answer here --- we want to see how you think about technology)?
  1.    Yes, i'd prefer using Flask, while making a lot of the backend parts that keeps our code running functionally (i.e error codes), it does take time away from the actual code. I'd perfer to focus on the code flow and make sure it runs smoothly rather than creating and focusing most or every part of the code.
