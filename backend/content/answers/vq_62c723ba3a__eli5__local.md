---
qid: vq_62c723ba3a__eli5__local
question: Udf example in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 265
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:29-05:00'
sources: []
---

Think of Hive as a giant kitchen where you’re cooking up reports from a huge pantry (your data). A **UDF**—User‑Defined Function—is like a special spice blend you make yourself instead of buying one off the shelf.  
In Hive, you write Java (or another JVM language) code that takes an input value and returns a new value. For example, let’s create a UDF called `reverseString` that flips any text:

```java
public class ReverseString extends UDF {
  public String evaluate(String s) {
    return new StringBuilder(s).reverse().toString();
  }
}
```

Compile it into a JAR, put the JAR on Hive’s classpath, and register it:

```sql
ADD JAR /home/me/reverse.jar;
CREATE TEMPORARY FUNCTION rev AS 'ReverseString';
```

Now you can use `rev()` in any query just like built‑in functions:

```sql
SELECT rev(name) FROM users;
```

The UDF lets Hive perform that custom “spice” on every row, turning the kitchen into a place where your own recipes run as smoothly as the canned ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
