// Competency-Based Performance Diagnostic Engine
function checkCompetency(isCorrectOption) {
    if (!isCorrectOption) {
        alert("Performance standard not met. Analyze your architectural choice and select an alternative design loop pattern.");
        return;
    }

    // Access structural DOM components
    const assessmentBox = document.getElementById('quiz-box');
    const resultBox = document.getElementById('assessment-result');
    
    // Animate display state layout toggles
    assessmentBox.classList.add('hidden');
    resultBox.classList.remove('hidden');

    // Live update the student's primary dashboard framework progress bar
    // Focus structural selectors onto card item #2 (Asynchronous Programming)
    const targetCard = document.querySelectorAll('.competency-card')[1];
    const progressBar = targetCard.querySelector('.progress-bar');
    const badge = targetCard.querySelector('.status-badge');
    const levelLabel = targetCard.querySelector('.progress-metrics span:first-child');
    const percentLabel = targetCard.querySelector('.progress-metrics span:last-child');

    // Run structural component properties adjustments
    progressBar.style.width = "100%";
    progressBar.style.background = "#16a34a"; // Transition to complete green asset
    
    badge.textContent = "Mastered";
    badge.style.background = "#dcfce7";
    badge.style.color = "#16a34a";

    levelLabel.textContent = "Level: Proving Mastery";
    percentLabel.textContent = "100% Verified";
}

function resetAssessment() {
    const assessmentBox = document.getElementById('quiz-box');
    const resultBox = document.getElementById('assessment-result');
    
    resultBox.classList.add('hidden');
    assessmentBox.classList.remove('hidden');

    // Revert target metrics down to baseline values
    const targetCard = document.querySelectorAll('.competency-card')[1];
    const progressBar = targetCard.querySelector('.progress-bar');
    const badge = targetCard.querySelector('.status-badge');
    const levelLabel = targetCard.querySelector('.progress-metrics span:first-child');
    const percentLabel = targetCard.querySelector('.progress-metrics span:last-child');

    progressBar.style.width = "65%";
    progressBar.style.background = "#ea580c";
    
    badge.textContent = "Practising";
    badge.style.background = "#ffedd5";
    badge.style.color = "#ea580c";

    levelLabel.textContent = "Level: Proficient";
    percentLabel.textContent = "65% Verified";
}
