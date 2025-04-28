1. value added: 20
2. final result: 20
3. Because "var" is function-scoped or global-scoped, not block-scoped. This can cause unexpected bugs. It is better to use let or const, which are safer and block-scoped.
4. value added: 20
5. ReferenceError: result is not defined. Because "let" is block-scoped, so line 13 can not access result.
6. Line 9 is not executed because error before line 9. In line 7: TypeError: Assignment to constant variable. Because "const" variables cannot be reassigned, and "result = num1 + num2" tries to reassign it.
7. Line 13 is not executed because of the earlier error. Same error as explained in question 6.