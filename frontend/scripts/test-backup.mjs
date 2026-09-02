/**
 * Guards the two things in a backup that fail silently.
 *
 * A restore reads a file this app did not write — it can be truncated, it can be
 * a different app's JSON, it can carry one card whose `ef` is a string. And a
 * merge decides, for every id in both copies, which history survives. Neither
 * throws when it goes wrong: you get a browser that says "restored" and a
 * scheduler quietly running on someone else's numbers.
 *
 *   node scripts/test-backup.mjs        # or: npm run test:backup
 *
 * Node runs the TypeScript directly (type stripping, Node 22.6+). That is why
 * lib/backup.ts imports only types — a value import would need a resolver this
 * has not got, and the check would have to be deleted to keep the module.
 */
import assert from "node:assert/strict";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

// pathToFileURL, not the bare path: on Windows an absolute path starts "C:\",
// and Node's ESM loader reads that leading "c:" as a URL scheme it refuses.
const lib = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "backup.ts");
const {
  parseBackup,
  mergeProgress,
  mergeNotes,
  mergeCards,
  countsOf,
  backupFilename,
  BACKUP_VERSION,
} = await import(pathToFileURL(lib).href);

const card = (over = {}) => ({
  ef: 2.5,
  interval: 6,
  reps: 2,
  lapses: 0,
  due: "2026-09-09",
  stage: "review",
  seen: true,
  ...over,
});

const progress = (over = {}) => ({
  flash: {},
  srs: {},
  bookmarks: [],
  notes: {},
  custom: {},
  quizzes: [],
  studyDays: [],
  recent: [],
  ...over,
});

const file = (over = {}) => ({
  app: "prepforge",
  version: BACKUP_VERSION,
  exported: "2026-09-02T10:00:00.000Z",
  progress: progress({ srs: { q001: card() }, bookmarks: ["q001"] }),
  notes: [{ id: "n1", kind: "sticky", title: "t", body: "b", tags: ["x"], created: "", updated: "" }],
  settings: { role: "ML Engineer" },
  cards: [{ id: "u-1", question: "Why?", answer: "Because of the thing.", created: "2026-09-02" }],
  audio: {},
  ...over,
});

const tests = {
  test_a_file_we_wrote_reads_back_with_everything_in_it() {
    const r = parseBackup(JSON.stringify(file()));
    assert.equal(r.ok, true);
    assert.equal(r.dropped, 0);
    const c = countsOf(r.file);
    assert.deepEqual(c, { scheduled: 1, bookmarks: 1, notes: 1, quizzes: 0, cards: 1, clips: 0 });
    assert.equal(r.file.cards[0].question, "Why?");
    assert.equal(r.file.settings.role, "ML Engineer");
  },

  test_junk_is_refused_by_name_rather_than_thrown() {
    assert.equal(parseBackup("not json at all").ok, false);
    assert.equal(parseBackup("[1,2,3]").ok, false);
    assert.equal(parseBackup(JSON.stringify({ app: "anki", version: 1 })).ok, false);
  },

  test_a_backup_from_a_newer_build_is_refused_whole() {
    const r = parseBackup(JSON.stringify(file({ version: BACKUP_VERSION + 1 })));
    assert.equal(r.ok, false);
    assert.match(r.error, /version/i);
  },

  test_a_card_whose_numbers_are_strings_is_dropped_and_counted() {
    // "2.5" * 6 is not arithmetic, it is concatenation, and SM-2 would schedule
    // the card centuries out without erroring anywhere.
    const bad = file({
      progress: progress({ srs: { good: card(), bad: card({ ef: "2.5" }), nodue: card({ due: "soon" }) } }),
    });
    const r = parseBackup(JSON.stringify(bad));
    assert.equal(r.ok, true);
    assert.equal(r.dropped, 2);
    assert.deepEqual(Object.keys(r.file.progress.srs), ["good"]);
  },

  test_only_data_urls_survive_as_audio() {
    const r = parseBackup(
      JSON.stringify(file({ audio: { a: "data:audio/webm;base64,AAA", b: "https://example.com/x.webm" } })),
    );
    assert.deepEqual(Object.keys(r.file.audio), ["a"]);
  },

  test_local_scheduling_wins_every_collision() {
    const local = progress({ srs: { q1: card({ interval: 30 }) }, flash: { q1: "known" } });
    const incoming = progress({ srs: { q1: card({ interval: 1 }), q2: card() }, flash: { q1: "new" } });
    const merged = mergeProgress(local, incoming);
    assert.equal(merged.srs.q1.interval, 30, "the imported copy must not overwrite local scheduling");
    assert.equal(merged.flash.q1, "known");
    assert.ok(merged.srs.q2, "an id only the import has must arrive");
  },

  test_lists_union_without_duplicating() {
    const q = { date: "2026-08-01", topic: "ML", total: 10, correct: 7 };
    const local = progress({ bookmarks: ["a"], studyDays: ["2026-08-02"], quizzes: [q], recent: ["a"] });
    const incoming = progress({
      bookmarks: ["a", "b"],
      studyDays: ["2026-08-01", "2026-08-02"],
      quizzes: [q, { ...q, date: "2026-07-01" }],
      recent: ["z"],
    });
    const merged = mergeProgress(local, incoming);
    assert.deepEqual(merged.bookmarks, ["a", "b"]);
    assert.deepEqual(merged.studyDays, ["2026-08-01", "2026-08-02"]);
    assert.equal(merged.quizzes.length, 2, "the same session must not be counted twice");
    assert.deepEqual(merged.quizzes.map((r) => r.date), ["2026-07-01", "2026-08-01"]);
    assert.deepEqual(merged.recent, ["a"], "recent is this browser's shortcut, not history");
  },

  test_a_card_with_no_question_or_no_answer_is_not_restored() {
    // It would sit in the deck as a blank you cannot rate, and nothing else in
    // the app would ever complain about it.
    const r = parseBackup(
      JSON.stringify(
        file({
          cards: [
            { id: "u-1", question: "Real?", answer: "Yes.", created: "" },
            { id: "u-2", question: "  ", answer: "orphan answer", created: "" },
            { id: "u-3", question: "orphan question", answer: "", created: "" },
            { id: "u-4", question: 7, answer: "wrong type", created: "" },
          ],
        }),
      ),
    );
    assert.deepEqual(r.file.cards.map((c) => c.id), ["u-1"]);
  },

  test_a_backup_without_cards_reads_as_none_rather_than_failing() {
    // Every file written before this feature existed.
    const r = parseBackup(JSON.stringify(file({ cards: undefined, version: 1 })));
    assert.equal(r.ok, true);
    assert.deepEqual(r.file.cards, []);
  },

  test_a_card_id_already_here_keeps_the_copy_that_is_here() {
    // The local copy is the one whose SM-2 row you have been rating, and that
    // row is keyed by this id.
    const merged = mergeCards(
      [{ id: "u-1", question: "mine", answer: "a", created: "" }],
      [
        { id: "u-1", question: "theirs", answer: "b", created: "" },
        { id: "u-2", question: "new", answer: "c", created: "" },
      ],
    );
    assert.equal(merged.length, 2);
    assert.equal(merged[0].question, "mine");
  },

  test_a_note_id_already_here_keeps_the_copy_that_is_here() {
    const local = [{ id: "n1", title: "mine" }];
    const merged = mergeNotes(local, [{ id: "n1", title: "theirs" }, { id: "n2", title: "new" }]);
    assert.equal(merged.length, 2);
    assert.equal(merged[0].title, "mine");
  },

  test_the_filename_carries_the_day_so_a_folder_sorts() {
    assert.equal(backupFilename("2026-09-02T10:00:00.000Z"), "prepforge-backup-2026-09-02.json");
    assert.equal(backupFilename(""), "prepforge-backup-export.json");
  },
};

let passed = 0;
for (const [name, fn] of Object.entries(tests)) {
  try {
    fn();
    console.log(`ok   ${name}`);
    passed++;
  } catch (err) {
    console.log(`FAIL ${name}: ${err.message}`);
  }
}
const total = Object.keys(tests).length;
console.log(`\n${passed}/${total} pass`);
process.exit(passed === total ? 0 : 1);
