
const QUESTIONS=[{"id": "q1", "topic": "Flowcharts", "question": "A flowchart contains a diamond with the condition `score ≥ 70`. The YES arrow leads to `DISPLAY(\"Pass\")`; the NO arrow leads to `DISPLAY(\"Retry\")`. What is displayed when `score` is 68?", "choices": ["Pass", "Retry", "68", "Nothing"], "answer": 1, "explanation": "A decision diamond tests a condition. Because 68 ≥ 70 is false, the NO branch executes."}, {"id": "q3", "topic": "Conditionals", "question": "Consider this AP-style pseudocode:\n\nx ← 12\nIF(x > 10)\n{\n  x ← x - 4\n}\nDISPLAY(x)\n\nWhat is displayed?", "choices": ["4", "8", "12", "16"], "answer": 1, "explanation": "The condition is true, so 4 is subtracted from 12. The result is 8."}, {"id": "q5", "topic": "Booleans", "question": "What is the value of the expression `17 < 10`?", "choices": ["true", "false", "17", "10"], "answer": 1, "explanation": "17 is not less than 10, so the relational expression evaluates to false."}, {"id": "q7", "topic": "Boolean Operators", "question": "What is the result of `TRUE AND FALSE`?", "choices": ["TRUE", "FALSE", "TRUE AND FALSE", "Undefined"], "answer": 1, "explanation": "AND is true only when both operands are true."}, {"id": "q9", "topic": "Boolean Operators", "question": "A student can enter a lab only when `hasPass` is true AND `age ≥ 15` is true. Which condition correctly represents this rule?", "choices": ["hasPass OR age ≥ 15", "NOT(hasPass) AND age ≥ 15", "hasPass AND age ≥ 15", "hasPass AND age < 15"], "answer": 2, "explanation": "Both requirements must be true, so AND is used."}, {"id": "q10", "topic": "Boolean Operators", "question": "What is the value of `NOT(5 = 5)`?", "choices": ["TRUE", "FALSE", "5", "0"], "answer": 1, "explanation": "5 = 5 is true. NOT reverses the Boolean value, producing false."}, {"id": "q11", "topic": "Nested Conditionals", "question": "Consider:\n\nIF(score ≥ 90)\n{\n  DISPLAY(\"A\")\n}\nELSE\n{\n  IF(score ≥ 80)\n  {\n    DISPLAY(\"B\")\n  }\n  ELSE\n  {\n    DISPLAY(\"C\")\n  }\n}\n\nWhat is displayed when `score` is 84?", "choices": ["A", "B", "C", "Nothing"], "answer": 1, "explanation": "84 is not at least 90, so the ELSE executes. Then 84 is at least 80, so B is displayed."}, {"id": "q13", "topic": "While Loops", "question": "Consider:\n\ncount ← 1\nREPEAT UNTIL(count > 4)\n{\n  DISPLAY(count)\n  count ← count + 1\n}\n\nHow many values are displayed?", "choices": ["3", "4", "5", "The loop never stops"], "answer": 1, "explanation": "The loop displays 1, 2, 3, and 4. After count becomes 5, the stopping condition is true."}, {"id": "q14", "topic": "While Loops", "question": "Which situation is most likely to cause an infinite loop?", "choices": ["The loop condition eventually becomes false", "The loop variable changes so it moves toward the stopping condition", "The loop condition remains true because the variable controlling it never changes", "The loop contains a DISPLAY statement"], "answer": 2, "explanation": "If the condition stays true and nothing changes the state needed to make it false, the loop may never terminate."}, {"id": "q17", "topic": "For Loops", "question": "Consider:\n\nFOR EACH number FROM 1 TO 5\n{\n  DISPLAY(number)\n}\n\nHow many times does the DISPLAY instruction execute?", "choices": ["4", "5", "6", "It depends on the input"], "answer": 1, "explanation": "The loop visits 1, 2, 3, 4, and 5, so DISPLAY executes five times."}, {"id": "q18", "topic": "For Loops", "question": "Which task is best suited to a counted FOR loop?", "choices": ["Repeat until a user finally guesses correctly", "Repeat exactly 10 times", "Repeat until a sensor reaches a target value", "Repeat forever"], "answer": 1, "explanation": "A counted FOR loop is useful when the number of iterations is known."}, {"id": "q19", "topic": "For Loops", "question": "Consider:\n\nsum ← 0\nFOR EACH n FROM 2 TO 6\n{\n  sum ← sum + n\n}\nDISPLAY(sum)\n\nWhat is displayed?", "choices": ["15", "18", "20", "21"], "answer": 2, "explanation": "The values added are 2 + 3 + 4 + 5 + 6 = 20."}, {"id": "q20", "topic": "Nested For Loops", "question": "Consider:\n\nFOR EACH row FROM 1 TO 3\n{\n  FOR EACH col FROM 1 TO 4\n  {\n    DISPLAY(\"*\")\n  }\n}\n\nHow many times is `\"*\"` displayed?", "choices": ["7", "12", "16", "24"], "answer": 1, "explanation": "The outer loop runs 3 times and the inner loop runs 4 times for each outer iteration: 3 × 4 = 12."}, {"id": "q21", "topic": "Nested For Loops", "question": "A nested loop has an outer loop that runs 5 times. During each outer iteration, the inner loop runs 2 times. How many total inner-loop executions occur?", "choices": ["7", "10", "25", "52"], "answer": 1, "explanation": "The inner loop runs 2 times for each of 5 outer iterations: 5 × 2 = 10."}, {"id": "q23", "topic": "Conditionals", "question": "Consider:\n\nx ← 7\nIF(x > 5)\n{\n  x ← x + 2\n}\nELSE\n{\n  x ← x - 2\n}\nDISPLAY(x)\n\nWhat is displayed?", "choices": ["5", "7", "9", "14"], "answer": 2, "explanation": "Because 7 > 5 is true, the IF branch runs and x becomes 9."}, {"id": "q25", "topic": "Boolean Operators", "question": "Suppose `temperature = 72` and `raining = FALSE`. What is the value of `(temperature > 70) AND NOT(raining)`?", "choices": ["TRUE", "FALSE", "72", "Undefined"], "answer": 0, "explanation": "temperature > 70 is true, raining is false so NOT(raining) is true; TRUE AND TRUE is TRUE."}, {"id": "q26", "topic": "While Loops", "question": "Consider:\n\nx ← 0\nWHILE(x < 5)\n{\n  x ← x + 1\n}\n\nWhich statement is true after the loop finishes?", "choices": ["x is 4", "x is 5", "x is 6", "The loop never finishes"], "answer": 1, "explanation": "The loop stops once x is no longer less than 5, so x is 5."}, {"id": "q28", "topic": "Flowcharts", "question": "A flowchart repeatedly returns to an earlier process box after a decision. What programming concept does this most directly represent?", "choices": ["Selection", "Iteration", "Assignment only", "Input"], "answer": 1, "explanation": "A backward path in a flowchart commonly represents repetition or iteration."}, {"id": "q30", "topic": "For Loops", "question": "Consider:\n\ncount ← 0\nFOR EACH n FROM 1 TO 4\n{\n  IF(n MOD 2 = 0)\n  {\n    count ← count + 1\n  }\n}\nDISPLAY(count)\n\nWhat is displayed?", "choices": ["1", "2", "3", "4"], "answer": 1, "explanation": "The even values from 1 through 4 are 2 and 4, so count becomes 2."}, {"id": "q35", "topic": "Nested For Loops", "question": "A program uses:\n\nFOR EACH i FROM 1 TO 4\n{\n  FOR EACH j FROM 1 TO i\n  {\n    DISPLAY(\"X\")\n  }\n}\n\nHow many Xs are displayed?", "choices": ["4", "8", "10", "16"], "answer": 2, "explanation": "The inner loop runs 1 + 2 + 3 + 4 = 10 total times."}];
const ENDPOINT=(window.GOOGLE_SHEET_ENDPOINT||"").trim();
let student={},current=0,answers=[],shuffledQuestions=[],topicStats={},streak=0,totalXP=0,practiceQuestion=null;
const $=id=>document.getElementById(id);
const tips={"Flowcharts":"Follow the arrows one decision at a time. A diamond means a condition chooses a path.","Conditionals":"Determine whether the condition is TRUE or FALSE before executing the branch.","Booleans":"A Boolean expression evaluates to TRUE or FALSE. Translate the comparison before moving on.","Boolean Operators":"AND needs both sides true; OR needs at least one true; NOT flips a Boolean.","Nested Conditionals":"Trace the outer decision first. Only then evaluate the conditional inside its branch.","While Loops":"Track the variable that controls the loop. Ask what changes each time and when the condition becomes false.","For Loops":"Count the values in the stated range and remember that the loop body runs once per value.","Nested For Loops":"Multiply the repeated work when the inner loop has a fixed count; otherwise trace each outer iteration.","Iteration":"Identify what repeats, what changes, and the exact condition that stops the repetition."};
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function renderQuestion(){const q=shuffledQuestions[current],n=current+1;$("topicPill").textContent=q.topic.toUpperCase();$("questionNumber").textContent=`QUESTION ${n} / ${shuffledQuestions.length}`;$("questionTag").textContent=`Q${String(n).padStart(2,"0")}`;$("questionText").textContent=q.question;$("intelTopic").textContent=q.topic;$("intelTip").textContent=tips[q.topic]||"Trace the algorithm carefully.";$("liveXP").textContent=totalXP;$("headerScore").textContent=`XP ${totalXP}`;$("streak").textContent=`STREAK ×${streak}`;$("progressBar").style.width=`${current/shuffledQuestions.length*100}%`;$("answeredText").textContent="SELECT AN ANSWER";$("choices").innerHTML="";q.choices.forEach((c,i)=>{let b=document.createElement("button");b.className="choice";b.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span>${esc(c)}</span>`;b.onclick=()=>selectAnswer(i);$("choices").appendChild(b)});$("nextBtn").disabled=answers[current]===undefined;$("nextBtn").textContent=current===shuffledQuestions.length-1?"VIEW REPORT":"LOCK IN";window.scrollTo({top:0,behavior:"smooth"})}
function selectAnswer(i){answers[current]=i;document.querySelectorAll(".choice").forEach((b,n)=>b.classList.toggle("selected",n===i));$("nextBtn").disabled=false;$("answeredText").textContent="ANSWER LOCKED"}
function initStats(){topicStats={};shuffledQuestions.forEach(q=>{if(!topicStats[q.topic])topicStats[q.topic]={correct:0,total:0};topicStats[q.topic].total++})}
function finishQuiz(){let score=0;shuffledQuestions.forEach((q,i)=>{if(answers[i]===q.answer){score++;topicStats[q.topic].correct++}});let pct=Math.round(score/shuffledQuestions.length*100);$("quizScreen").classList.add("hidden");$("resultsScreen").classList.remove("hidden");$("headerMode").textContent="MISSION REPORT";$("scorePercent").textContent=pct+"%";$("scoreCount").textContent=`${score} / ${shuffledQuestions.length}`;$("resultsTitle").textContent=pct>=80?"MISSION COMPLETE":"MISSION COMPLETE — KEEP TRAINING";$("resultsSummary").textContent=pct>=80?"Your algorithm-tracing foundation is strong. Use the skill map to sharpen specific edges before the test.":"Your report shows exactly where to focus. Target the yellow skills, then replay the mission.";let entries=Object.entries(topicStats).map(([topic,s])=>({topic,correct:s.correct,total:s.total,pct:Math.round(s.correct/s.total*100)})).sort((a,b)=>b.pct-a.pct),strengths=entries.filter(x=>x.pct>=75),weak=entries.filter(x=>x.pct<75);$("strengths").innerHTML=strengths.length?strengths.map(x=>`<div class="skill-item"><span>${esc(x.topic)}</span><span class="ok">${x.pct}%</span></div>`).join(""):"<p style='color:#8da2b4'>Keep training — no skill reached 75% yet.</p>";$("weaknesses").innerHTML=weak.length?weak.map(x=>`<div class="skill-item"><span>${esc(x.topic)}</span><span class="needs">${x.pct}%</span></div>`).join(""):"<p class='ok'>No major upgrade area based on this attempt.</p>";$("breakdown").innerHTML=entries.map(x=>`<div class="topic-row"><div class="topic-head"><span>${esc(x.topic)}</span><span>${x.pct}% · ${x.correct}/${x.total}</span></div><div class="bar"><div style="width:${x.pct}%"></div></div></div>`).join("");$("practiceTopics").innerHTML=entries.map(x=>`<button class="topic-btn" data-topic="${esc(x.topic)}">${esc(x.topic)} · ${x.pct}%</button>`).join("");document.querySelectorAll(".topic-btn").forEach(b=>b.onclick=()=>startPractice(b.dataset.topic));$("nextSteps").textContent=weak.length?`Recommended training path: ${weak.slice(0,3).map(x=>x.topic).join(" → ")}. Start with a targeted set above.`:"Try a targeted set to reinforce your strongest skills, then replay the full mission.";sendResults(score,pct,entries);window.scrollTo({top:0,behavior:"smooth"})}
function startPractice(topic){document.querySelectorAll(".topic-btn").forEach(b=>b.classList.toggle("active",b.dataset.topic===topic));practiceQuestion=shuffle(QUESTIONS.filter(q=>q.topic===topic))[0];renderPractice(topic)}
function renderPractice(topic){let q=practiceQuestion;$("practiceArea").classList.remove("hidden");$("practiceArea").innerHTML=`<div class="practice-q"><div class="kicker">${esc(topic)}</div><h3>Targeted Practice</h3><div class="question-text">${esc(q.question)}</div><div id="practiceChoices"></div><div id="practiceFeedback"></div><button class="topic-btn" id="anotherPractice">GENERATE ANOTHER</button></div>`;q.choices.forEach((c,i)=>{let b=document.createElement("button");b.className="practice-choice";b.textContent=`${String.fromCharCode(65+i)}. ${c}`;b.onclick=()=>{document.querySelectorAll(".practice-choice").forEach(x=>x.disabled=true);let ok=i===q.answer,f=$("practiceFeedback");f.className=`practice-result ${ok?"correct":"incorrect"}`;f.innerHTML=ok?`<b>CORRECT.</b> ${esc(q.explanation)}`:`<b>NOT QUITE.</b> Correct answer: <b>${String.fromCharCode(65+q.answer)}. ${esc(q.choices[q.answer])}</b><br>${esc(q.explanation)}`};$("practiceChoices").appendChild(b)});$("anotherPractice").onclick=()=>startPractice(topic)}
function sendResults(score,pct,entries){
  const note=$("setupNote");
  if(!ENDPOINT){
    note.textContent="Google Sheets is not connected. Your score is still available above.";
    note.className="sheet-status error";
    return;
  }

  const payload={
    studentName:student.name, period:student.period, teacher:student.teacher,
    score, total:shuffledQuestions.length, percent:pct,
    strengths:entries.filter(x=>x.pct>=75).map(x=>`${x.topic}: ${x.pct}%`).join("; "),
    weaknesses:entries.filter(x=>x.pct<75).map(x=>`${x.topic}: ${x.pct}%`).join("; "),
    topicScores:Object.fromEntries(entries.map(x=>[x.topic,{correct:x.correct,total:x.total,percent:x.pct}])),
    questionResults:shuffledQuestions.map((q,i)=>({id:q.id,topic:q.topic,correct:answers[i]===q.answer,selected:answers[i]}))
  };

  note.textContent="Saving your results to the class spreadsheet…";
  note.className="sheet-status saving";

  // Use a real browser form submission rather than fetch().
  // This avoids cross-origin/CORS behavior that can prevent Apps Script
  // web apps from receiving a request from GitHub Pages.
  try{
    let iframe=document.getElementById("sheetSubmitFrame");
    if(!iframe){
      iframe=document.createElement("iframe");
      iframe.id="sheetSubmitFrame";
      iframe.name="sheetSubmitFrame";
      iframe.style.display="none";
      document.body.appendChild(iframe);
    }

    const form=document.createElement("form");
    form.method="POST";
    form.action=ENDPOINT;
    form.target="sheetSubmitFrame";
    form.style.display="none";

    const input=document.createElement("input");
    input.type="hidden";
    input.name="payload";
    input.value=JSON.stringify(payload);
    form.appendChild(input);
    document.body.appendChild(form);

    iframe.onload=()=>{
      note.textContent="✓ Results sent to the class spreadsheet.";
      note.className="sheet-status success";
      setTimeout(()=>form.remove(),1000);
    };

    form.submit();

    // Give the request a moment to leave the browser before reporting success.
    setTimeout(()=>{
      if(note.classList.contains("saving")){
        note.textContent="✓ Results sent. Check the class spreadsheet.";
        note.className="sheet-status success";
      }
    },3000);
  }catch(e){
    console.error("Sheet submission failed",e);
    note.textContent="⚠ We could not submit the results. Please tell your teacher before closing this page.";
    note.className="sheet-status error";
  }
}
$("startBtn").onclick=()=>{let name=$("studentName").value.trim(),period=$("period").value,teacher=$("teacher").value;if(!name||!period||!teacher){alert("Please enter your name, choose your period, and choose your teacher.");return}student={name,period,teacher};current=0;answers=[];streak=0;totalXP=0;shuffledQuestions=shuffle(QUESTIONS);initStats();$("startScreen").classList.add("hidden");$("quizScreen").classList.remove("hidden");$("headerMode").textContent="ACTIVE MISSION";renderQuestion()};
$("nextBtn").onclick=()=>{if(answers[current]===undefined)return;let q=shuffledQuestions[current],ok=answers[current]===q.answer;if(ok){streak++;totalXP+=100+(streak-1)*25}else streak=0;if(current<shuffledQuestions.length-1){current++;renderQuestion()}else finishQuiz()};
$("retakeBtn").onclick=()=>location.reload();
