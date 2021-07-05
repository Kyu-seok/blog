---
title: If you are a programmer 
author: Your boy Q
date: July 1, 2021
---

If you are a programmer, you **should** know c/c++. 
If you can't, **shame on you**. 
You better not call yourself a programmer.

__Below is from "C wikipedia"__

C (/siː/, as in the letter c) is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.

A successor to the programming language B, C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix. It was applied to re-implementing the kernel of the Unix operating system.[6] During the 1980s, C gradually gained popularity. It has become one of the most widely used programming languages,[7][8] with C compilers from various vendors available for the majority of existing computer architectures and operating systems. C has been standardized by the ANSI since 1989 (ANSI C) and by the International Organization for Standardization (ISO).

C is an imperative procedural language. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.[9]

As of January 2021, C was ranked first in the TIOBE index, a measure of the popularity of programming languages, moving up from the no. 2 spot the previous year.[10]

Like most procedural languages in the ALGOL tradition, C has facilities for structured programming and allows lexical variable scope and recursion. Its static type system prevents unintended operations. In C, all executable code is contained within subroutines (also called "functions", though not strictly in the sense of functional programming). Function parameters are always passed by value (except arrays). Pass-by-reference is simulated in C by explicitly passing pointer values. C program source text is free-format, using the semicolon as a statement terminator and curly braces for grouping blocks of statements.

The C language also exhibits the following characteristics:

The language has a small, fixed number of keywords, including a full set of control flow primitives: if/else, for, do/while, while, and switch. User-defined names are not distinguished from keywords by any kind of sigil.
It has a large number of arithmetic, bitwise, and logic operators: +,+=,++,&,||, etc.
More than one assignment may be performed in a single statement.
Functions:
Function return values can be ignored, when not needed.
Function and data pointers permit ad hoc run-time polymorphism.
Functions may not be defined within the lexical scope of other functions.
Data typing is static, but weakly enforced; all data has a type, but implicit conversions are possible.
Declaration syntax mimics usage context. C has no "define" keyword; instead, a statement beginning with the name of a type is taken as a declaration. There is no "function" keyword; instead, a function is indicated by the presence of a parenthesized argument list.
User-defined (typedef) and compound types are possible.
Heterogeneous aggregate data types (struct) allow related data elements to be accessed and assigned as a unit.
Union is a structure with overlapping members; only the last member stored is valid.
Array indexing is a secondary notation, defined in terms of pointer arithmetic. Unlike structs, arrays are not first-class objects: they cannot be assigned or compared using single built-in operators. There is no "array" keyword in use or definition; instead, square brackets indicate arrays syntactically, for example month[11].
Enumerated types are possible with the enum keyword. They are freely interconvertible with integers.
Strings are not a distinct data type, but are conventionally implemented as null-terminated character arrays.
Low-level access to computer memory is possible by converting machine addresses to typed pointers.
Procedures (subroutines not returning values) are a special case of function, with an untyped return type void.
A preprocessor performs macro definition, source code file inclusion, and conditional compilation.
There is a basic form of modularity: files can be compiled separately and linked together, with control over which functions and data objects are visible to other files via static and extern attributes.
Complex functionality such as I/O, string manipulation, and mathematical functions are consistently delegated to library routines.
While C does not include certain features found in other languages (such as object orientation and garbage collection), these can be implemented or emulated, often through the use of external libraries (e.g., the GLib Object System or the Boehm garbage collector).

Relations to other languages
Many later languages have borrowed directly or indirectly from C, including C++, C#, Unix's C shell, D, Go, Java, JavaScript (including transpilers), Julia, Limbo, LPC, Objective-C, Perl, PHP, Python, Ruby, Rust, Swift, Verilog and SystemVerilog (hardware description languages).[5] These languages have drawn many of their control structures and other basic features from C. Most of them (Python being a dramatic exception) also express highly similar syntax to C, and they tend to combine the recognizable expression and statement syntax of C with underlying type systems, data models, and semantics that can be radically different.