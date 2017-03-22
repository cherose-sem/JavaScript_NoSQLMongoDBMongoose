# JavaScript_NoSQLMongoDBMongoose
Period 3 - NoSQL, MongoDB and Mongoose : Simple MEAN Application with tests

#### Explain, generally, what is meant by a NoSQL database.
NoSQL (often interpreted as Not only SQL) databases provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.

Motivations for this approach include:

* Simplicity of design
* Horizontal scaling
* Finer control over availability.

Its actually hard to say what a NoSQL database is, except for the fact that is does (usually ;-) NOT use SQL

#### Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
Pros:

1. Impedance mismatch
2. support large volumes of data by running on clusters
3. Common characteristics of NoSQL databases:

  * Not using the relational model
  * Running well on clusters
  * Open-source
  * Built for the 21st century web estates
  * Schemaless
A computer cluster consists of a set of loosely or tightly connected computers that work together so that, in many respects, they can be viewed as a single system. Computer clusters have each node set to perform the same task, controlled and scheduled by software

Cons:

1. NoSQL databases haven't been around here for so long. They might have some annoying bugs, poor documentation or unexpected behavior.
2. You obviously don't have a universal language like SQL. So be prepared to change completely your app code base as you're moving towards another NoSQL solution.
3. Sometimes it is not easy to find support for a NoSQL DB, even if you're ok to pay for it.

#### Explain how databases like MongoDB and redis would be classified in the NoSQL world
##### Mongo DB
Is a document oriented database. Documents are independent units which makes performance better (data is read contiguously off disk) and makes it easier to distribute data across multiple servers while preserving its locality. Application logic is easier to write. No need to translate between objects in your application and SQL queries, you can just turn the object model directly into a document. (sure, but you have ORM with SQL) Unstructured data can be stored easily, since a document contains whatever keys and values the application logic requires.
##### Redis
Redis is an open source, in-memory data structure store, used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Basically key/value storage. Redis typically holds the whole dataset in memory, and saves to disk every two seconds.

#### Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes, out of the box:

* Schemas
* Built-in type casting
* Validation (also included with plain MongoDB as of v. 3.2)
* Query building
* Business logic hooks (middleware)

#### Explain, and demonstrate, using relevant examples, the strategy for querying MongoDB (all CRUD operations)
CRUD operations create, read, update, and delete documents.SEE jokes.js (facade) for examples.

#### Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement.

Indexes are special data structures that store a small portion of the collection’s data set in an easy to traverse form. 
The index stores the value of a specific field or set of fields, ordered by the value of the field. 
MongoDB can return sorted results by using the ordering in the index.

SEE jokes.js (facade) for examples.

#### Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere


#### Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB

#### Explain the benefits from using Mongoose, and provide an example involving all CRUD operations

#### Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations

#### Explain how redis "fits" into the NoSQL world, and provide an example of how you have used it.

#### Explain, using a relevant example, a full MEAN application (the A, can be an ionic application) including relevant test cases to test the REST-API (not on the production database)
