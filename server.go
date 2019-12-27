package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to my website!")
	})

	fs := http.FileServer(http.Dir("map/"))
	http.Handle("/map/", http.StripPrefix("/map/", fs))

	http.ListenAndServe(":8888", nil)
}
