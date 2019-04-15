package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1)

	go func() {
		runit("goat")
		wg.Done()
	}()

	go func() {
		runit("tiger")
		wg.Done()
	}()

	wg.Wait()
}

func runit(thing string) {
	// fmt.Println("Hello, WebAssembly!")
	for i := 1; i <= 5; i++ {
		fmt.Println(i, thing)
		time.Sleep(time.Millisecond * 500)
	}
}
