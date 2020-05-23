
# LAB - Class 01 ,Class 02 ,Class 03 ,Class 04

## Project: Notesy

### Author:  Ammar Al-Hariry

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-ammar-hariry/Notesy/pull/8)

### module 
``note.js``
``input.js``
``Node.js``
``eslint``
``jest``

### Packages
``minimist``
``add``
``delete``
``list``
``category``
``mongoose``



#### How to initialize/run your application (where applicable)

- ``node index.js --add 'valid note'``
- ``node index.js -a 'valid note'``
- ``node index.js --a 'valid note'``
- ``./index.js --add 'valid note'``
- ``node index.js --a 'valid note' --category health`` 
- ``node index.js --list`` : this will show all the note in the database
- ``node index.js --list category`` : this will show all the note in the database in the specific category
- ``node index.js --delete _id`` : this will delete a specific note that have this _id 
- ``node index.js --update _id "the updated note"`` : this will update a specific note that have this _id 



#### How to use your library (where applicable)

#### Tests

-when run the application with ``node index.js --add 'valid note'``  it will giv an error if the method thad we use not ``(--a || -a || --add)`` and the validation of the note is string, otherwise it will show an error. it tasted with ``if statement``
- test the code with ``jest``

#### UML

![UML DIAGRAM](https://i.ibb.co/4tzrws9/whitebord-lab01.png)
