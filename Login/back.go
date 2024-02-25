package main

import(
	"fmt"
	"html/template"
	"net/http"
	"github.com/gorilla/mux"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

type User struct{
	Id uint32
	Name, Email, Password string
}

func handleFunc(){
	http.Handle("/", rtr)
	http.ListenAndServe(":8080", nil)
}

func main(){
	handleFunc()
}