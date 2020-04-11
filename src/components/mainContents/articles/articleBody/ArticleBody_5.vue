<template>
    <div class="article-body">
        <div class="left-sidebar" style="color: #141e30;">
            <div class="container d-none d-md-block" style="background-color: #25274d; height: 100vh; padding: 6vh 10px 10px; font-family: Montserrat Regular">
                <div class="row">
                    <div class="col-xs-10 col-sm-10 col-md-10">
                        <p style="font-weight: bold; color: #aaabbb">Navigate the page</p>
                    </div>
                </div>
                <div class="row">
                    <div id="scroll-style" class="col-xs-12 col-sm-12 col-md-12" style="overflow-y: auto; height: 80vh;">
                        <ul class="nav flex-column" style="flex-wrap: wrap">
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-2" style="color: white; padding-bottom: 10px;">
                                    sql package
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-3" style="color: white; padding-bottom: 10px;">
                                    postgressql database driver
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-4" style="color: white; padding-bottom: 10px;">
                                    db struct
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-5" style="color: white; padding-bottom: 10px;">
                                    about sql.Open
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-6" style="color: white; padding-bottom: 10px;">
                                    about db.Query()
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-7" style="color: white; padding-bottom: 10px;">
                                    about rows.Next() & rows.Scan()
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-8" style="color: white; padding-bottom: 10px;">
                                    crud operations
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-9" style="color: white; padding-bottom: 10px;">
                                    create
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-10" style="color: white; padding-bottom: 10px;">
                                    update
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-11" style="color: white; padding-bottom: 10px;">
                                    delete
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="color: whitesmoke; padding-bottom: 10px;">
                                    <span style="font-weight: bold; color: #aaabbb;">code snippets</span>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-1" style="color: white; padding-bottom: 10px;">
                                                create database and account table
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-2" style="color: white; padding-bottom: 10px;">
                                                install pq package
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-3" style="color: white; padding-bottom: 10px;">
                                                import pq package
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-4" style="color: white; padding-bottom: 10px;">
                                                go db struct
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-6" style="color: white; padding-bottom: 10px;">
                                                func Open
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-8" style="color: white; padding-bottom: 10px;">
                                                open db connection
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-9" style="color: white; padding-bottom: 10px;">
                                                defer referesher
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-10" style="color: white; padding-bottom: 10px;">
                                                fetch from db
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-11" style="color: white; padding-bottom: 10px;" >
                                                func query
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-12" style="color: white; padding-bottom: 10px;">
                                                func Next
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-13" style="color: white; padding-bottom: 10px;">
                                                func Scan
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-14" style="color: white; padding-bottom: 10px;">
                                                insert data into table
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-15" style="color: white; padding-bottom: 10px;">
                                                update data into table
                                            </a>
                                        </li>

                                    </ul>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
        <div class="content" style="font-family: Montserrat Regular;">
            <div class="container-fluid">
                <div class="row">
                    <div class="content-pad col-xs-8 col-sm-8 col-md-8">
                        <ArticleBodyPara
                                id="nav-title-1"
                                style="font-weight: bold;; font-size: 25px"
                                para="Go Integrate a postgres sql database"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now we have implemented the RESTful API interface in previous articles, it’s time to dive in and understand the entire life
                                cycle of a go application. Whether it is a REST API written in java, C++ or nodejs, there is a higher chance that you would require
                                a database integration to store information at some point. This article is about integrating a PostgresSQL database with our go application."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="For starters let’s assume that there is a PostgresSQL database in our local machine. Here, let’s consider the database as go_db and the table account."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s create our database and account table"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-1"
                                lang="markdown"
                                code='
                                    //create database
                                    postgres=# CREATE DATABASE go_db;

                                    //use database
                                    postgres=# \c go_db;

                                    //create table
                                    go_db=# CREATE TABLE account (
                                       id         int8,
                                       user_name  CHARACTER VARYING(24),
                                       first_name CHARACTER VARYING(24),
                                       last_name  CHARACTER VARYING(24)
                                    );

                                    //populate account table with data
                                    go_db=# INSERT INTO account VALUES (1, "james123", "james", "root");

                                    //verify data
                                    go_db=# SELECT * FROM account;

                                    //will return
                                    id  | user_name | first_name | last_name
                                    ----+-----------+------------+-----------
                                    1   | james123  | james      | root
                                '
                        />

                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now that we have a database, a table and set of records, let’s see how we can use go and
                                previously exposed APIs to integrate with the data source layer."
                        />
                        <ArticleBodyPara
                                id="nav-title-2"
                                style="font-weight: bold;; font-size: 25px"
                                para="Sql package"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Package database/sql provides a generic interface to work with SQL and SQL-like databases. It is required to use this package in conjunction
                                with the database driver. For this tutorial purpose, will be using a PostgresSQL database driver, since we will be connecting to a PostgresSQL database.
                                Read more on sql package <a href="https://golang.org/pkg/database/sql/">source</a>).
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                id="nav-title-3"
                                style="font-weight: bold;; font-size: 25px"
                                para="PostgresSQL database driver"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="For Postgres will be using a package known as pq. Before importing the package, we should install it and import the dependency."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-2"
                                lang="markdown"
                                code='
                                    go get github.com/lib/pq
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Once installed, driver package can be imported along with the sql package."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-3"
                                lang="go"
                                code='
                                    import (
                                       "database/sql"
                                       _ "github.com/lib/pq"
                                    )
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Normally it is not advisable to use the driver package with the sql package to avoid tight coupling with driver implementation.
                                If we are to change the driver somewhere down the line, it will be difficult if we have used direct driver related implementations inside our code base.
                                In this case we are loading the driver anonymously by aliasing its package qualifier to _ and this way we avoid tight coupling our code base with the driver
                                package."
                        />
                        <ArticleBodyPara
                                id="nav-title-4"
                                style="font-weight: bold;; font-size: 25px"
                                para="DB struct"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="With our driver in place, we are ready to connect to the database. But first it is important to know sql package basics."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Accessing database in go is done via a DB struct. This struct is used to create connections, handle connection pool configurations, prepare statements, execute queries,
                                fetch results and handle transactions."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="There are multiple important tasks take place behind the scene."
                        />
                        <ArticleBodyPara>
                            <ul>
                                <li>The struct uses the driver to establish a connection to the underlying database.</li>
                                <li>Manage pool of connections.</li>
                                <li>Manage concurrent access to the underlying database.</li>
                            </ul>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-4"
                                lang="go"
                                code='
                                    type DB struct {
                                       waitDuration int64
                                       connector driver.Connector
                                       numClosed uint64
                                       mu           sync.Mutex
                                       freeConn     []*driverConn
                                       connRequests map[uint64]chan connRequest
                                       nextRequest  uint64
                                       numOpen      int

                                       openerCh          chan struct{}
                                       resetterCh        chan *driverConn
                                       closed            bool
                                       dep               map[finalCloser]depSet
                                       lastPut           map[*driverConn]string
                                       maxIdle           int
                                       maxOpen           int
                                       maxLifetime       time.Duration
                                       cleanerCh         chan struct{}
                                       waitCount         int64
                                       maxIdleClosed     int64
                                       maxLifetimeClosed int64
                                       stop func()
                                    }
                                '
                        />
                        <ArticleBodyPara>
                            <ul>
                                <li><strong>waitDuration:</strong> Total time waited for new connections.</li>
                                <li><strong>connector:</strong> A Connector can be passed to sql.OpenDB, to allow drivers to implement their own sql.DB constructors.</li>
                                <li><strong>numClosed:</strong> atomic counter for total number of closed connections.</li>
                                <li><strong>mu:</strong> This struct represents a mutual exclusion lock.</li>
                                <li><strong>freeConn: </strong> This struct wraps a driver.Conn with a mutex.</li>
                                <li><strong>connRequests: </strong> connRequest map where single connRequest represents one request for a new connection. When no idle connections available, DB.conn will create a new connRequest.</li>
                                <li><strong>nextRequest: </strong> Next key to use in connRequests map</li>
                                <li><strong>numOpen: </strong> number of opened and pending open connections</li>
                                <li><strong>openerCh: </strong> Used to signal the need for new connections.</li>
                                <li><strong>dep: </strong> A map where the key is finalCloser and the value depSet.</li>
                                <li><strong>lastPut: </strong> stacktrace of last conn’s put, for debugging.</li>
                                <li><strong>maxIdle: </strong> zero means defaultMaxIdleConns; negative means 0.</li>
                                <li><strong>maxOpen: </strong> 0 means unlimited.</li>
                                <li><strong>maxLifetime: </strong> maximum amount of time a connection may be reused.</li>
                                <li><strong>waitCount: </strong> Total number of connections waited for</li>
                                <li><strong>maxIdleClosed: </strong> Total number of connections closed due to idle</li>
                                <li><strong>maxLifetimeClosed: </strong> Total number of connections closed due to max free limit</li>
                            </ul>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                id="nav-title-5"
                                style="font-weight: bold;; font-size: 25px"
                                para="About sql.Open"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This function is responsible for opening a database using a database driver name and provided data source information.
                                Down the line, this function might just validate it arguments without actually creating a connection to the database. Therefore db.Ping() is required for further verification.
                                This function should be called only once and rarely required to be close."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-5"
                                lang="markdown"
                                code='
                                    func Open(driverName, dataSourceName string) (*DB, error)
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s use the above function to open a database in our code base."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-6"
                                lang="go"
                                code='
                                    //datasource
                                    connStr := "dbname=orders user=postgres password=password host=localhost port=5432 sslmode=disable"

                                    //passing arguments to Open function.
                                    db, err := sql.Open("postgres", connStr)
                                '
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Since we are using a PostgresSQL database and a Postgres database driver, the driver name should be postgres. Data source string is defined as a
                                separate string connStr and passed in to the function. It includes the connection parameters such as database name:dbname, database user: user,
                                database password: password, database host: host, database port: port (default port is 5432) and sslmode: sslmode, more info on connection parameters -
                                <a href="https://godoc.org/github.com/lib/pq">source</a>.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-7"
                                lang="go"
                                code='
                                    //function
                                    func Open(driverName, dataSourceName string) (*DB, error)

                                    //equivalent usage in our code base
                                    db, err := sql.Open("postgres", connStr)
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="As you can see, the function returns an error and a DB struct. It is required to check and handle errors returned from any sql package related operations,
                                thus we should do the same for this one as well."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-8"
                                lang="go"
                                code='
                                    connStr := "dbname=orders user=postgres password=password host=localhost port=5432 sslmode=disable"

                                    db, err := sql.Open("postgres", connStr)
                                    if err != nil {
                                       log.Fatal(err)
                                    }
                                    defer db.Close()
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="If there is an error, we log it and if sql.DB shouldn’t have a lifetime beyond the scope we should defer db.Close() the connection."
                        />
                        <ArticleBodyPara>
                            <div style="font-size: 18px; padding: 20px; border-left: 5px solid #7d7d69; background-color: #efefe8; font-family: Gotu Regular;">
                                <p style="font-weight: bold;; font-size: 25px">Refresher: defer</p>
                                <p>A defer statement delays the execution of a function until other functions complete its executions. Once all the surrounding functions return, defer functions will execute.</p>
                                <p>defer statements are evaluated immediately hence will stacked up first than the other functions. Even if there are multiple defer statements,
                                    the last statement will be in the top of the stack (last in first out).</p>
                                <p>The following scenario will describe the function behavior.</p>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-9"
                                lang="markdown"
                                code='
                                    //function
                                    func main() {
                                       defer fmt.Println("end 3")
                                       defer fmt.Println("end 2")
                                       fmt.Println("hello")
                                       for i := 0; i < 10; i++ {
                                          fmt.Print(i, " ")
                                       }
                                       fmt.Println("world")
                                       defer fmt.Println("end 1")
                                    }

                                    //output
                                    hello
                                    0 1 2 3 4 5 6 7 8 9 world
                                    end 1
                                    end 2
                                    end 3

                                    //function stack for defer statements, just an illustration.
                                    | defer "end 1"|
                                    | defer "end 2"|
                                    | defer "end 3"|
                                    ----------------
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="So what defer db.Close() does is, once all the other functions are done executing, close the database connection.
                                And even if there are multiple defer statements after this, should add the close statement as the first defer statement of the lot,
                                since closing should happen at the end."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Although here we close the connection, it is not advisable to open() and close() database connections frequently.
                                only one sql.DB struct should be created for each datastore separately and should keep it open and pass around into short-lived function as an argument.
                                sql.DB should be treated as a long-lived object else poor usage of reusable connections could lead to running out of available network resources."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now we have open a connection to the database, let’s see how we can query and perform crud operations."
                        />
                        <ArticleBodyPara
                                id="nav-title-6"
                                style="font-weight: bold;; font-size: 25px"
                                para="About db.Query()"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Function query() should be used for scenarios which required to return a set of rows (SELECT), even if the result set is empty.
                                On the other hand if no row set is required to return from the underlying operation (INSERT, DELETE) exec() should be used instead of query()."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Earlier we populate account table, now let’s use query() to fetch the results."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-10"
                                lang="go"
                                code='
                                    connStr := "dbname=go_db user=postgres password=password host=localhost port=5432 sslmode=disable"

                                    db, err := sql.Open("postgres", connStr)
                                    if err != nil {
                                       log.Fatal(err)
                                    }
                                    var (
                                       id        int
                                       userName  string
                                    )

                                    rows, err := db.Query("select id, user_name from account")
                                    if err != nil {
                                       log.Fatal(err)
                                    }

                                    defer rows.Close()
                                    for rows.Next() {
                                       err := rows.Scan(&id, &userName)
                                       if err != nil {
                                          log.Fatal(err)
                                       }
                                       log.Println(id, userName)
                                    }

                                    //output
                                    2019/04/20 20:18:40 1 james123
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Here, we are using the query() to send the query to the database. This is what query function looks like,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-11"
                                lang="markdown"
                                code='
                                    func (db *DB) Query(query string, args ...interface{}) (*Rows, error)
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Query executes a query that return rows, typically a SELECT. The args are for any placeholder parameters in the query.
                                We should check errors for any sql package function as mentioned earlier in this article. Thus, should do the same for query() as well.
                                Statement defer rows.Close() is important, it closes the Rows, preventing further enumeration."
                        />
                        <ArticleBodyPara
                                id="nav-title-7"
                                style="font-weight: bold;; font-size: 25px"
                                para="About rows.Next() & rows.Scan()"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-12"
                                lang="markdown"
                                code='
                                    func (rs *Rows) Next() bool
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Function next() provides a way to iterate over the rows in the result set. If there is no next result row or an error, next() will return false."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Next provide a way to iterate over each row, scan() is used to iterate over each column in the current row and get column fields specified in the parameters.
                                In the query() we’ve asked to fetch two fields in the SELECT statement, id and userName. These two fields ( &id, &userName points to the locations of the variables)
                                need to be specified in the scan function as parameters."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-13"
                                lang="markdown"
                                code='
                                    func (rs *Rows) Scan(dest ...interface{}) error
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This is the way to access a result set in go. No way to get a row as a map since everything is strongly typed. Scan require variables with the correct type and pass
                                pointers to the function as parameters as mentioned above."
                        />
                        <ArticleBodyPara
                                id="nav-title-8"
                                style="font-weight: bold;; font-size: 25px"
                                para="CRUD operations"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Will use our account table to perform db crud operations. Earlier section described Read via SELECT using query, in this section will see how to perform rest of the Create,
                                Update and Delete operations."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Although we used query to fetch data for a SELECT statement, it is recommended to use exec for INSERT, UPDATE and DELETE statements which doesn’t require returning rows."
                        />
                        <ArticleBodyPara
                                id="nav-title-9"
                                style="font-weight: bold;; font-size: 25px"
                                para="Create"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s insert data into our account table."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-14"
                                lang="markdown"
                                code='
                                    insertStmt, err := db.Prepare("INSERT INTO account(id, user_name,
                                    first_name, last_name) VALUES($1, $2, $3, $4)")

                                    if err != nil {
                                     log.Fatal(err)
                                    }

                                    res, err := insertStmt.Exec(2, "jon1234", "jon", "snow")
                                    if err != nil {
                                     log.Fatal(err)
                                    }

                                    rowCnt, err := res.RowsAffected()
                                    if err != nil {
                                     log.Fatal(err)
                                    }

                                    log.Printf("Successfully added an account, affected count = %d\n", rowCnt)
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Here, db.Prepare() prepares the INSERT statement and we pass the values as arguments using $1, $2, $3, $4.
                                This parameter arguments are specific to PostgresSQL driver. Next, insertStmt.Exec() executes the prepared statement by passing arguments of the record which
                                needs to be inserted. RowsAffected() returns the number of rows been inserted. As you can see we have handled all the errors as mentioned earlier."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This will insert an account into our database. Let’s look at how to update an existing record in the database."
                        />
                        <ArticleBodyPara
                                id="nav-title-10"
                                style="font-weight: bold;; font-size: 25px"
                                para="Update"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s update an existing record in our account table,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-15"
                                lang="markdown"
                                code='
                                    updateStmt, err := db.Prepare("UPDATE account SET user_name = $1
                                    WHERE id = $2")

                                    if err != nil {
                                     log.Fatal(err)
                                    }

                                    updateRes, err := updateStmt.Exec("jonSnow", 2)
                                    if err != nil {
                                     log.Fatal(err)
                                    }

                                    updateRowCnt, err := updateRes.RowsAffected()
                                    if err != nil {
                                     log.Fatal(err)
                                    }

                                    log.Printf("Successfully updated an account, affected count = %d\n", updateRowCnt)
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Similar to INSERT, we use the same structure but prepare statement query and the parameter passed in exec is the only difference."
                        />
                        <ArticleBodyPara
                                id="nav-title-11"
                                style="font-weight: bold;; font-size: 25px"
                                para="Delete"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="After successfully inserting and updating, it’s time to remove a record in the database. For DELETE also we can use a similar approach as INSERT and UPDATE.
                                Will be using a prepare statement and pass relevant arguments via exec function."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="So it is the end of another article. We have integrated a database with our REST API endpoints. Now we know how to connect to a database in go and work with data."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Next will see how to integrate a third party REST API with our go application."
                        />

                        <ArticleBodyPara
                                style="font-size: 15px"
                                para="- End -"
                        />
                        <ArticleBodyTags
                                :tags="['database', 'postgres']"
                        />
                        <ArticleBodyDivider />

                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <p style="font-size: 18px">
                                    Next in line <span><font-awesome-icon icon="arrow-circle-right" size="1x" style="color: #090979; cursor: pointer"/></span>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="blog-articles" style="display: flex; flex-direction: row; flex-wrap: nowrap; overflow-x: auto; height: 400px; padding-top: 20px; padding-left: 20px">
                                <ArticleCard
                                        published="Apr 21, 2019"
                                        title="Everything you need to know about creating a RESTful Api in Go — Part III"
                                        subtitle="detailed overview on integrating swagger"
                                        :tags="['swagger', 'api']"
                                        card-no=6
                                        article-no="article_v00005"
                                        card-style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px"
                                />
                                <ArticleCard
                                        published="Apr 15, 2019"
                                        title="Everything you need to know about creating a RESTful Api in Go — Part V"
                                        subtitle="detailed overview on consuming an external rest apis"
                                        :tags="['3rd party', 'json', 'rest']"
                                        card-no=8
                                        article-no="article_v00007"
                                        card-style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4" style="background-color: white;">
                        <div class="row">
                            <div class="col-xs-4 col-sm-4 col-md-4"></div>
                            <div class="col-xs-8 col-sm-8 col-md-8" style="height: 25vh; background-color: white; box-shadow: 0 0 30px rgba(16,14,23,.25);">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 d-flex" style="justify-content: center; padding-top: 10vh">
                                        <p>for sponsors</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4"></div>
                        </div>
                        <div class="row" style="padding-top: 50px">
                            <div class="col-xs-4 col-sm-4 col-md-4"></div>
                            <div class="col-xs-8 col-sm-8 col-md-8" style="height: 25vh; background-color: white; box-shadow: 0 0 30px rgba(16,14,23,.25);">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 d-flex" style="justify-content: center; padding-top: 10vh">
                                        <p>for sponsors</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleCard from '../../ArticleCard'
    import ArticleBodyPara from '../../ArticleBodyPara'
    import ArticleBodyCode from '../../ArticleBodyCode'
    import ArticleBodyTags from '../../ArticleBodyTags'
    import ArticleBodyDivider from '../../ArticleBodyDivider'

    export default {
        name: "ArticleBody_5",
        components: {
            ArticleCard,
            ArticleBodyPara,
            ArticleBodyCode,
            ArticleBodyTags,
            ArticleBodyDivider
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Montserrat Regular";
        src: url("../../../../assets/Montserrat-Regular.ttf");
    }

    #scroll-style::-webkit-scrollbar {
        background-color: rgb(243, 246, 249);
        border-radius: 10px;
        width: 5px;
    }
    #scroll-style::-webkit-scrollbar-thumb {
        background-color: #4f566b;
        border-radius: 10px;
    }

    @media (max-width: 575.98px) {
        /*Extra small devices (portrait phones, less than 576px)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 0; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 0; height: 100%;
        }
        .content-pad {
            padding-left: 10px;
        }
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        /*Small devices (landscape phones, 576px and up)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 0; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 0; height: 100%; padding-right: 10px;
        }
        .content-pad {
            padding-left: 10px;
        }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        /*Medium devices (tablets, 768px and up)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 15%; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 15%; height: 100%; padding-right: 10px;
        }
        .content-pad {
            padding-left: 50px;
        }
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
        /*Large devices (desktops, 992px and up)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 15%; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 15%; height: 100%; padding-left: 10px; padding-right: 10px;
        }
        .content-pad {
            padding-left: 50px;
        }
    }
    @media (min-width: 1200px) {
        /*Extra large devices (large desktops, 1200px and up)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 15%; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 15%; height: 100%; padding-left: 10px; padding-right: 10px;
        }
        .content-pad {
            padding-left: 50px;
        }
    }
</style>
