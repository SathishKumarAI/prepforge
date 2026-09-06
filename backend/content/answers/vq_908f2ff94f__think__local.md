---
qid: vq_908f2ff94f__think__local
question: How does one create a standby database?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 644
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:02:17-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - *What system?* Assume Oracle Real‑Time Data Guard (RTDG) or standard Data Guard.  
   - *Goal:* Create a standby database that receives redo from the primary and can be activated for read‑only queries.  
   - *Prerequisites:* Primary and standby hosts, network connectivity, identical OS/Oracle versions, proper listener configuration.

**2️⃣ Mental model / framework**  
   - **Primary → Redo → Network → Standby**  
   - Three phases: *initial copy*, *apply redo* (archiver + LGWR), *activation*.  
   - Use Data Guard broker or manual scripts; the broker automates many steps but understanding underlying commands is key.

**3️⃣ Step‑by‑step reasoning**  

| Step | Action | Key command / config |
|------|--------|---------------------|
| 1. Prepare standby file system | Create datafiles/redo logs directories, listener. | `mkdir -p $ORACLE_HOME/dbs` |
| 2. Configure `tnsnames.ora` & `listener.ora` on both hosts for connectivity. | |
| 3. Enable archive logging on primary | `ALTER DATABASE ARCHIVELOG;` |
| 4. Create standby control file from primary | `CREATE STANDBY CONTROLFILE AS COPY FROM PRIMARY ...` |
| 5. Set up Data Guard configuration | `ALTER SYSTEM SET LOG_ARCHIVE_DEST_1='LOCATION=/u01/arch' SCOPE=SPFILE;` |
| 6. Use `dbca -createDatabase` with “standby” option or manually copy datafiles using `rsync`. | |
| 7. Start Redo Apply on standby | `START STANDBY REORGANIZE;` (or via broker: `dgconfig -start`) |
| 8. Verify status | `SELECT * FROM v$database_mirroring_status;` |

**4️⃣ Common traps to avoid**  
   - Mismatched Oracle versions → redo format incompatibility.  
   - Skipping `ALTER SYSTEM SET DB_FILE_MULTIBLOCK_READS=OFF` on standby for performance.  
   - Forgetting to enable network service broker (`DBMS_SERVICE_BROKER`).  
   - Assuming instant activation; must wait until `RECOVERY` is complete.

**5️⃣ Sanity‑check & communicate**  
   - Verify redo flow: `SELECT * FROM v$archived_log WHERE dest_id=1 AND applied='YES';`  
   - Test failover by issuing `ALTER DATABASE RECOVER MANAGED STANDBY DATABASE CANCEL;` then `RECOVER MANAGED STANDBY DATABASE USING CURRENT LOGFILE;`.  
   - Explain each step to the team, highlighting why each command is necessary (e.g., archiving ensures redo availability).  

By following this structured approach—clarify, model, execute, avoid pitfalls, and validate—you’ll reliably create a standby database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
