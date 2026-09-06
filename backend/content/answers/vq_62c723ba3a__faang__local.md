---
qid: vq_62c723ba3a__faang__local
question: Udf example in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 634
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:21-05:00'
sources: []
---

**Clarify**

> *Question*: “Give an example of a user‑defined function (UDF) in Hive.”  
> **Assumptions to confirm**:  
> 1. We’re talking about Hive on Hadoop, not Spark SQL.  
> 2. The UDF will be written in Java (the native language for Hive UDFs).  
> 3. It should illustrate the typical lifecycle: compile, register, and use.

---

**Approach**

1. Pick a simple transformation that isn’t built‑in (e.g., converting a string to title case).  
2. Show the Java class skeleton with `evaluate` method.  
3. Compile into a JAR, copy it to HDFS, and register it in Hive.  
4. Demonstrate usage in an SQL query.

---

**Depth**

```java
package com.example.hive;

import org.apache.hadoop.hive.ql.exec.UDF;
import org.apache.hadoop.io.Text;

public class TitleCaseUDF extends UDF {
    public Text evaluate(Text input) {
        if (input == null) return null;
        String s = input.toString();
        StringBuilder sb = new StringBuilder(s.length());
        boolean capitalizeNext = true;
        for (char c : s.toCharArray()) {
            if (!Character.isLetterOrDigit(c)) {         // delimiter
                capitalizeNext = true;
                sb.append(c);
                continue;
            }
            sb.append(capitalizeNext ? Character.toUpperCase(c)
                                     : Character.toLowerCase(c));
            capitalizeNext = false;
        }
        return new Text(sb.toString());
    }
}
```

Compile → `hive-udf.jar`.  
In Hive:

```sql
ADD JAR /user/me/hive-udf.jar;
CREATE TEMPORARY FUNCTION title_case AS 'com.example.hive.TitleCaseUDF';
SELECT title_case(name) FROM users;
```

*Complexity*: O(n) per string, constant extra space.

---

**Edge Cases**

| Input | Expected |
|-------|----------|
| `null` | `NULL` (handled) |
| `"john doe"` | `"John Doe"` |
| `"  multiple   spaces "` | `"  Multiple   Spaces "` |
| `"123abc"` | `"123Abc"` |

Test with unit tests and HiveQL scripts to ensure null safety and delimiter handling.

---

**Optimize & Communicate**

*If performance matters*, consider:
- Using a `StringBuilder` once per call (already done).  
- Caching the compiled regex for delimiters if we switch to more complex tokenization.  

During an interview, I’d narrate: “I first clarified the context, then chose a minimal yet illustrative UDF, walked through Java implementation, registration, and usage, highlighted complexity, addressed edge cases, and finally discussed possible optimizations.” This demonstrates structured thinking, clear communication, depth of knowledge, and awareness of trade‑offs—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
