---
qid: vq_1bd5840e9e__fp__local
question: How to write a UDF in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 516
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:25:12-05:00'
sources: []
---

**Why Hive needs a UDF**

Hive translates SQL‑like queries into MapReduce or Tez jobs.  
The built‑in functions cover only the “common” data types; any domain‑specific logic (e.g., parsing logs, computing checksums, fuzzy matching) must be supplied by the user. A User‑Defined Function (UDF) plugs that missing piece: it receives a row’s values in the map phase, performs arbitrary Java (or Scala/Python) code, and returns a single scalar value that can be used in SELECT, WHERE, or GROUP BY.

**How Hive resolves a UDF call**

1. **Parsing** – The Hive parser recognizes `myUdf(col)` as a function invocation.
2. **Semantic analysis** – It checks that the returned type matches the query context and that the Java class is on the classpath.
3. **Code generation** – During job compilation, Hive emits bytecode that instantiates the UDF and calls its `evaluate()` method for each input tuple.
4. **Execution** – In the map or reduce task, the framework supplies the column values to `evaluate()`, obtains the result, and writes it back into the output record.

**Writing a UDF (Java)**

```java
import org.apache.hadoop.hive.ql.exec.UDF;
import org.apache.hadoop.io.Text;

public class MyUdf extends UDF {
  public Text evaluate(Text input) {          // input column type
    if (input == null) return null;
    String s = input.toString();
    // arbitrary logic
    String out = s.substring(0, Math.min(5, s.length()));
    return new Text(out);
  }
}
```

Compile to a JAR, place it on HDFS, and register:

```sql
ADD JAR /path/myudf.jar;
CREATE TEMPORARY FUNCTION myUdf AS 'com.example.MyUdf';
SELECT myUdf(col) FROM table;
```

**Non‑obvious insight**

A UDF is *not* a vectorized operation; it runs per row, incurring Java object allocation overhead. To mitigate this, reuse `Text` or other mutable objects across calls (store them as instance fields) and avoid new allocations inside `evaluate()`. This subtle micro‑optimisation can halve runtime for large datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
