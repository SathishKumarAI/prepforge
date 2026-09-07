---
qid: ing_31745f6e68__faang__local
question: 'Explain: 2.3 Coding Challenge: Implement an In-Memory Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 633
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:13-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build a simple in‑memory key/value store that supports `SET`, `GET`, `DELETE`, and transaction‑style `BEGIN/COMMIT/ROLLBACK`.  
*Assumptions to confirm:*  
- Keys & values are strings.  
- No persistence required; data lives only while the process runs.  
- Concurrency: single‑threaded for now, but design should allow future locking.

**2️⃣ Approach**  
1. Use a `HashMap<String,String>` as the primary store.  
2. For transactions keep a stack of *undo logs*: each log entry records `(key, oldValue)` before modification.  
3. On `BEGIN`, push a new empty list onto the stack.  
4. On `SET`/`DELETE`, if inside a transaction record previous state in the top log.  
5. `COMMIT` pops the top log and discards it; nested commits merge logs.  
6. `ROLLBACK` restores all keys from the top log and removes that log.

**3️⃣ Depth**  
```java
class InMemoryDB {
  Map<String,String> store = new HashMap<>();
  Deque<List<Log>> txStack = new ArrayDeque<>();

  void set(String k, String v){ record(k); store.put(k,v);}
  String get(String k){ return store.get(k);}
  void del(String k){ record(k); store.remove(k);}
  void begin(){ txStack.push(new ArrayList<>());}
  boolean commit(){
    if(txStack.isEmpty()) return false;
    List<Log> top = txStack.pop();
    if(!txStack.isEmpty()){
      txStack.peek().addAll(top);
    }
    return true;
  }
  boolean rollback(){
    if(txStack.isEmpty()) return false;
    for(Log l: txStack.pop()){ 
        if(l.old==null) store.remove(l.key); else store.put(l.key,l.old);}
    return true;
  }
}
```
Complexity: `O(1)` average per op; rollback/commit are linear in number of changes made in that transaction.

**4️⃣ Edge Cases**  
- Nested transactions: ensure logs merge correctly.  
- Deleting a key that didn’t exist – record null to restore.  
- Commit/Rollback without active transaction → error handling.  
- Large batch updates → memory pressure from undo logs.

**5️⃣ Optimize & Communicate**  
*Improvements:*  
- Use copy‑on‑write for large values or immutable snapshots.  
- Add read/write locks if moving to multi‑threaded.  
- Persist the log to disk for crash recovery (optional).  

*Communication:* I’d narrate my design decisions, trade‑offs between simplicity and future extensibility, and demonstrate test coverage for nested commits/rollbacks. This showcases structured thinking, depth, and clear communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
