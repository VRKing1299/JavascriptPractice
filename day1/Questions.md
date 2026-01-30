# DAY - 01

1. **Program to Print Integer Numbers Entered by the User:**

   Write a program where the user is asked to enter an integer number, and the program prints that number back to them. For example:

   - **Input:** **`42`**
   - **Output:** **`You entered: 42`**

2. **Write a Program to Find the Size of `int`, `float`, `double`, and `char` on Your Computer:**

   Write a program that displays the size of fundamental data types (**`int`**, **`float`**, **`double`**, and **`char`**) on your system. For example:

   - **Output:**

     ```jsx
     Size of int: 4 bytes
     Size of float: 4 bytes
     Size of double: 8 bytes
     Size of char: 1 byte
     ```

     - In JavaScript, we cannot directly determine the memory size of fundamental data types like int, float, or char as you would in statically typed languages like C or C++. This is because JavaScript is a dynamically typed language, and it abstracts away memory management details.

   - All numbers in JavaScript, whether integers or floating points, are represented as 64-bit floating-point values (IEEE 754 standard).
   - Strings are collections of characters, and their size depends on encoding (e.g., UTF-16 in JavaScript).There is no direct equivalent for a char type.

   - We need to use workarounds involving buffers, typed arrays, or specialized libraries, but those are more advanced concepts for now.

3. **Program to Find the Larger Number Among Two Numbers:**

   Write a program to compare two integers entered by the user and print the larger one. For example:

   - **Input:** **`Enter two numbers: 15, 20`**
   - **Output:** **`The larger number is: 20`**
