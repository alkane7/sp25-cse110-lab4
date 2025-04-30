1. print **3** in the console. Because "i" is counted to prices.length which is 3.
2. print **150** in the console. Because discountedprice is set to 50% discount of 300, which is 150.   
3. print **150** in the console. Because finalPrice is set to 50% discount of 300, which is 150.   
4. **[ 50, 100, 150 ]** Each price is multiplied by (1 - 0.5), which is 0.5. The results are stored in an array and returned.
5. It will cause an error which is ReferenceError: i is not defined. Because "let" is block-scoped, so you can not access "i" outside "for" block.
6. It will cause an error which is ReferenceError: discountedPrice is not defined. Because "let" is block-scoped, so you can not access "discountedPrice" outside "for" block.
7. print **150** in the console. Because the definition of finalPrice and line 14 are in the same block, so line 14 can be executed normally.
8. **[ 50, 100, 150 ]** Because the definition of discounted and line 16 are in the same block, so line 16 can be executed normally and correctly returned. Each price is multiplied by (1 - 0.5), which is 0.5. The results are stored in an array and returned.
9. It will cause an error which is ReferenceError: i is not defined. Because "let" is block-scoped, so you can not access "i" outside "for" block.
10. print **3** in the console. There is no error because "length" was declared outside of the loop with "const". It is accessible here.
11. **[ 50, 100, 150 ]** Although discounted is declared as a const, we are not reassigning the variable itself, only modifying its contents by using push(), which is allowed.
12. - A.student.name  
    - B. student['Grad Year'] 
    - C. student.greeting() 
    - D. student['Favorite Teacher'].name 
    - E. student.courseLoad[0]
13. A. **'32'** 2 is converted to string and concatenated with '3'.
    B. **1** 3 is converted to number and become 3-2=1.
    C. **3** null is converted to number 0 and become 3-0=3.
    D. **'3null'** null is treated as string and concatenated with '3'.
    E. **4** true maps to 1 and added to 3.
    F. **0** false and null both map to 0 and become 0+0=0.
    G. **'3undefined'** undefined is treated as string and concatenated with '3'.
    H. **NaN** 3 is converted to number but undefined cannot map to a number, so the result is NaN.
14. A. **true** 2 is converted to integer and compared with 1.
    B. **false** Because string comparison checks character by character.'2' is greater than '1'.
    C. **true** '==' allow type convert.'2' is converted to integer and compared with 2.
    D. **false** '===' donot allow type convert. '2' is string and 2 is number.
    E. **false** true is converted to 1 and compared with 2.
    F. **true** Boolean(2) is true and compared with true.
15. '==' compares values after type conversion. 
    '===' compares both value and type without conversion.

17. **[ 2, 4, 6 ]** Every element in the array is multiplied by 2 by function doSomething and returned.

19. 1
    4
    3
    2
