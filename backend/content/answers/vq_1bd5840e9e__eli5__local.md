---
qid: vq_1bd5840e9e__eli5__local
question: How to write a UDF in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 308
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:04:29-05:00'
sources: []
---

**Imagine your Hive database as a huge kitchen where recipes (queries) are cooked on a stove.**  
A *User‑Defined Function* (UDF) is like a special spice you make yourself: it’s not in the pantry, but you can add it to any recipe when you need that flavor.

1. **Write the code** – In Java create a class that extends `org.apache.hadoop.hive.ql.exec.UDF`.  
   ```java
   public class ReverseString extends UDF {
       public String evaluate(String s) { return new StringBuilder(s).reverse().toString(); }
   }
   ```
2. **Compile it** into a jar file (e.g., `mvn package` or `javac`).  
3. **Tell Hive about the jar** – run in Hive:
   ```sql
   ADD JAR /path/to/your.jar;
   CREATE TEMPORARY FUNCTION rev AS 'com.example.ReverseString';
   ```
4. **Use it** just like built‑in functions:
   ```sql
   SELECT rev(name) FROM users;
   ```

That’s all—think of the UDF as your custom spice, the jar as the container you hand to the kitchen, and Hive automatically knows how to sprinkle it into any recipe you write.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
