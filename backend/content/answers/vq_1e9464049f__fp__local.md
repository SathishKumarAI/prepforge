---
qid: vq_1e9464049f__fp__local
question: How does one get the value of a sequence into a PL/SQL variable?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 499
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:25:43-05:00'
sources: []
---

**Why a PL/SQL block needs a “value” for a sequence**

A *sequence* in Oracle is not a table; it is a generator that returns the next integer on each call.  
When you write

```sql
SELECT seq.NEXTVAL INTO :var FROM dual;
```

you are asking: *“Give me the next number produced by `seq` and store it in the PL/SQL variable `:var`.”*  
The `INTO` clause is the bridge between the SQL engine (which owns the sequence) and the PL/SQL runtime (which holds variables).  

**Derivation**

1. **Sequence semantics** – A sequence guarantees a unique, monotonically increasing value. The database enforces this in a single transaction‑level lock; it does not need to materialise a row to return a number.

2. **PL/SQL variable scope** – Variables exist only inside the PL/SQL block; they are not part of the SQL engine’s storage. Therefore, any data that originates from SQL must be transferred explicitly.

3. **`INTO` clause mechanics** – The parser rewrites `SELECT … INTO var FROM dual` as a *single‑row* fetch: Oracle evaluates `seq.NEXTVAL`, returns it as a column of the virtual table `dual`, and copies that column into the PL/SQL variable. This is essentially the same mechanism used for `FETCH cursor INTO ...`.

4. **Why not assign directly?**  
   ```plsql
   var := seq.NEXTVAL;  -- illegal
   ```
   Because `seq.NEXTVAL` is a SQL expression, not a PL/SQL expression. The only legal way to invoke it from PL/SQL is through a SELECT statement.

**Non‑obvious insight**

The *dual* table is merely syntactic sugar; you could also write:

```plsql
SELECT seq.NEXTVAL INTO var FROM dual;
```

or

```plsql
EXECUTE IMMEDIATE 'SELECT seq.NEXTVAL FROM dual' INTO var;
```

But the first form is preferred because it keeps the code in a single language block, allowing declarative error handling and better optimization. The key principle: *data flow from SQL to PL/SQL must be explicit via `INTO`.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
