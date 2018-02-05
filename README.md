# todo
Todo List Application w/ Rails (backend) and React/Redux (frontend)

## Requirements

* As a user, I can add a TODO to the list.
* As a user, I can add one or more sub-TODOs to a top-level TODO. The application should only allow for a depth of 2 (parent/child relationship, no grandchildren). i.e., A child TODO should not be allowed to have children of its own.
* If a sub-TODO exist and are all closed, then the parent TODO should close.
* If a parent TODO closes, then all sub-TODOs should close.
* As a user, I can see all the TODOs on the list in an overview.
* As a user, I can drill into a TODO to see more information about the TODO.
* As a user, I can delete a TODO.
* As a user, I can mark a TODO as completed.
* As a user, when I see all the TODOs in the overview, if today's date is past the TODO's deadline, highlight it.
* A TODO consists of a task (just a simple sentence or two is fine), a deadline date, a completed flag, and an optional "more details" field that allows for more details to be given (again, a single large text area is fine for this).The list of TODOs can be kept in memory.
