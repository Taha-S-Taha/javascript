//What values do the following expressions evaluate to?

//my attempt
/*
false || (true && false); (is false)
true || (1 + 2); (is true)
(1 + 2) || true; (is true) xxx
true && (1 + 2); (is true) xxx
false && (1 + 2); (is false)
(1 + 2) && true; (is true)
(32 * 4) >= 129; (is flase)
false !== !true; (is false)
true === 4; (is false)
false === (847 === '847'); (is true)
false === (847 == '847'); (is false)
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
(is true)
*/

//book solution
/*
Expression	Value
false || (true && false)	false
true || (1 + 2)	true
(1 + 2) || true	3
true && (1 + 2)	3
false && (1 + 2)	false
(1 + 2) && true	true
(32 * 4) >= 129	false
false !== !true	false
true === 4	false
false === (847 === '847')	true
false === (847 == '847')	false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false	true
*/

//note: mistakes are marked xxx on my attempt