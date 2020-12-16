---
module: fundamentals

level: 1

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# Rock Paper Scissors (Lizard Spock)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

You have learned how to build a **Command Line Interface** (CLI) game in Python. This means that you can also learn how to build a CLI in **JavaScript**!

In this challenge, you will work out how an existing CLI game in JavaScript works, using the same ideas which you've been applying in Python: _variables_, _control flow_ and _functions_.

As an extension, you will then try to extend the game by adding in some further behaviour.

## Learning Outcomes

- Interpret code written by others
- Use variable declaration and assignment in JavaScript
- Use control flow in JavaScript
- Use functions and arguments in JavaScript
- Use search engines as a learning and knowledge aid
- Add code to a codebase written by others

## Exercise 1: Installing and demoing

**Success criterion:** playing a few games of Rock Paper Scissors on your local machine by running the programme written.

TODO: add notes on this

## Exercise 2: Reading, understanding and documenting

**Success criterion:** a document which outlines how you think this JavaScript programme works. You don't have to achieve a theory which explains 100%, but you should strive to explain as much as possible.

(N.B.: The _correctness_ of your theory is **much less important** than the _process_ of forming this document. [Forming a prediction, and then discovering it was wrong, is an effective way to learn](https://www.sciencedirect.com/science/article/abs/pii/S0959475217303468)!)

As a _learning exercise_ in reading and thinking about code, here are some steps that we _suggest_ (not as a strict sequential ordering):

### a) Take some time to read and digest the code.

Focus on forming a theory about how the programme is meant to work, through the lens of _ideas_ rather than the _syntax_.

You won't understand everything straight away. That's okay! It is a different syntax to Python. However, the _ideas_ are very similar.

### b) Add comments for the parts you understand.

At this point in time, you're trying to make sense of the code, and hold a lot of things together in your head.

It will help your learning to take some of those things out of your head and put them down in writing, so we suggest that you begin documenting your understanding of the code by adding comments that explain what is happening.

For example, here is how you might try to document your understanding of a line of code within a function:

```js
function printGreeting(name) {
  /**
   * I think console.log is printing
   *  out the message we pass to it.
   *  This message comes from joining
   *  together three parts into a single
   *  combined message.
   */
  console.log("Hi there, " + name + "!");
}
```

... but you have the freedom to document in whatever way seems helpful or sensible to you.

(Unsure of the syntax for adding comments in JavaScript? Google it!)

_(N.B. This documenting exercise is suggested as a learning tool rather than a production codebase best practice.)_

### c) Google things you don't understand.

We expect that there are things in the code which you won't immediately fathom (e.g. `Object.values).

Google them and see if you can make sense of them!

### d) Experiment with changing things.

A great way to test your understanding of things is to experiment, change things, and see what breaks.

Things you might try doing:

- You have a theory about a variable - try doing a `console.log` of it to get some _visibility_ on its value
- You have a theory about the flow of a function - try moving things around inside it and see whether it breaks as you expect

### e) Produce a narrative document.

We suggest you

Things that you should try to include (amongst other things):

- How is it determined who wins out of the player or the computer?
- What is the apparent role or purpose of the 'variants'?
- What does `Math.floor(Math.random() * 3)` do and how does it help?
- Why is there a `while` loop in `getUserChoice()`?

## Exercise 3: Commentary