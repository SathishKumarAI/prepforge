---
qid: vq_3a26331ad6__faang__local
question: What is the difference between == in Java and Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 638
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:18-05:00'
sources: []
---

**Clarify**  
You’re asking how the equality operator behaves in Java (`==`) versus Scala’s `==`. In both languages it’s a *reference* comparison for objects, but Scala also overloads it for value types and collections.

**Assumptions to confirm**  
- We’re comparing reference‑vs‑value semantics.  
- We’re dealing with user‑defined classes vs. primitive wrappers.  

---

### Approach
1. Outline Java’s `==` semantics.  
2. Explain Scala’s `==` overloading (via `Any.equals`).  
3. Highlight differences in null handling and type safety.  
4. Provide code snippets for illustration.

---

## Depth

| Feature | Java `==` | Scala `==` |
|---------|-----------|------------|
| **Reference equality** | Yes – compares object references. |
| **Value equality** | No – requires `.equals()`. |
| **Null safety** | `null == null` → true; dereferencing throws NPE. |
| **Overloading** | None. |
| **Primitive vs wrapper** | Primitive types compare by value; wrappers use reference unless unboxed. |
| **Scala’s `==`** | Delegates to `Any.equals`. Handles `null` safely (`x == null` → false if x is non‑null). For collections and case classes, it performs deep equality. |

**Example**

```java
String a = new String("hi");
String b = new String("hi");

a == b          // false (different refs)
a.equals(b)     // true

int[] arr1 = {1};
int[] arr2 = {1};

arr1 == arr2    // false, arrays are objects
Arrays.equals(arr1, arr2); // true
```

```scala
case class Person(name: String)

val p1 = Person("Alice")
val p2 = Person("Alice")

p1 == p2        // true (deep value equality)
Array(1) == Array(1)  // false – arrays use reference eq
Seq(1) == Seq(1)      // true
```

---

## Edge Cases

- Comparing primitives vs. wrappers (`int` vs `Integer`).  
- Arrays: Scala’s `==` uses reference semantics; need `java.util.Arrays.equals`.  
- Null values: Scala’s `==` won’t throw NPE, Java’s `==` can be unsafe if used on unwrapped types.

---

## Optimize & Communicate

When writing production code, prefer:

- **Java**: use `.equals()` for value equality; reserve `==` for primitives and identity checks.  
- **Scala**: rely on `==` for most cases but remember arrays need explicit helpers (`Seq`, `Array.equals`).  

Explain this to interviewers by summarizing the table, highlighting null safety as a key differentiator, and noting that Scala’s design promotes safer equality semantics at the cost of a small learning curve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
