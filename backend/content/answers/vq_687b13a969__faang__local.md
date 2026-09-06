---
qid: vq_687b13a969__faang__local
question: Can one execute an operating system command from PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 588
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:14:20-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether a PL/SQL block can invoke an OS‑level command (e.g., `ls`, `shutdown`). We need to determine the environment (Oracle Database, version, OS) and any security constraints (DBMS\_ADMIN privileges, OS policy).

**Approach**  
1. Check if the database allows external calls (`UTL_FILE`/`BULK COLLECT` is irrelevant).  
2. Oracle provides `DBMS_SCHEDULER` or `DBMS_PROCESS_KILL` for external jobs; the most direct primitive is `DBMS_APPLICATION_INFO`, but that’s not a command executor.  
3. The canonical way is `DBMS_XPLAN.DISPLAY_CURSOR`; again, no.  
4. Actually, **Oracle’s `DBMS_SCHEDULER`** can launch OS commands via *programs* or *jobs* with `EXECUTABLE_NAME`.  
5. Alternatively, the undocumented package `UTL_HTTP` can call a REST endpoint that triggers an OS command on a host.

**Depth**  
```sql
BEGIN
  DBMS_SCHEDULER.CREATE_PROGRAM(
    program_name      => 'run_ls',
    program_type      => 'EXECUTABLE',
    number_of_arguments => 1,
    enabled           => FALSE);

  DBMS_SCHEDULER.DEFINE_PROGRAM_ARGUMENT(
    program_name => 'run_ls',
    argument_position => 1,
    argument_default_value => '/bin/ls');

  DBMS_SCHEDULER.ENABLE('run_ls');

  DBMS_SCHEDULER.CREATE_JOB(
    job_name        => 'job_ls',
    program_name    => 'run_ls',
    enabled         => TRUE);
END;
```
- **Complexity**: O(1) to create; execution is OS‑dependent.  
- **Trade‑offs**: Requires `CREATE JOB` privilege, may expose the DB to shell injection if arguments are user‑supplied.

**Edge Cases**  
- Non‑root users can’t run privileged commands.  
- Windows vs Linux paths differ.  
- Security policies (Oracle Advanced Security) may block external jobs.  
- Job failure handling: check `DBA_SCHEDULER_JOBS` for exit codes.

**Optimize & Communicate**  
Explain that while direct shell execution isn’t native to PL/SQL, Oracle’s scheduler is the intended mechanism, offering logging and error handling. If stricter isolation is needed, wrap the OS command in a stored procedure exposed via `DBMS_XMLGEN`, or use `UTL_HTTP` to call a controlled microservice. Conclude by highlighting that any such capability should be tightly governed to avoid privilege escalation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
