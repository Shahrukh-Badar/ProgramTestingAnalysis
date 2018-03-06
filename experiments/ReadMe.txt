To execute All 10 test cases
node ../src/js/commands/jalangi.js --inlineIID --inlineSource --analysis ../src/js/sample_analyses/ChainedAnalyses.js --analysis ../src/js/runtime/SMemory.js  --analysis Analysis.js TestCases.js


To execute Octane files individually,
node ../src/js/commands/jalangi.js --inlineIID --inlineSource --analysis ../src/js/sample_analyses/ChainedAnalyses.js --analysis ../src/js/runtime/SMemory.js  --analysis Analysis.js octaneTests/deltablue.js

