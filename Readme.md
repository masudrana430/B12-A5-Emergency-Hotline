6. Answer the following questions clearly:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
getElementById means select element by id 
getElementsByClassName means select element by class
querySelector means select any element(single element) 
querySelectorAll means select multiple element 

How do you create and insert a new element into the DOM?
ans: 
by using createElement() , we can create a new element into the DOM
by using appendChild() , we can insert a new element into the DOM

What is Event Bubbling and how does it work?
ans: 
an event runs on the clicked element, then propagates up through its ancestors (parent → document); stop it with event.stopPropagation().

What is Event Delegation in JavaScript? Why is it useful?
ans:
Put one listener on a parent; use e.target.closest('.btn') to handle children.
Fewer listeners; works for dynamically added elements.

What is the difference between preventDefault() and stopPropagation() methods?
ans:
preventDefault(): stop the default action (link nav, form submit).
stopPropagation(): stop the bubbling to ancestors.