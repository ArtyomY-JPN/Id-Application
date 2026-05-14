const levels = [
    // { answer: 'real', video: 'file_example_MP4_480_1_5MG.mp4'},
    { answer: 'real', video: 'sample-5s-360p.mp4' },
    { answer: 'ai', video: '184583-873933644_small.mp4' },
    { answer: 'ai', video: '202929-919288883_small.mp4'},
    { answer: 'real', video: '15741672_960_540_60fps.mp4'} 
];


function check(event) {
    event.preventDefault();
    let score = document.getElementById('score');
    let level = document.getElementById('level'); 
    const inputValue = event.target.userAnswer.value;
    const video = document.getElementById('videoPlayer');
    const currentLevel = Number(level.value) - 1;

    if (currentLevel < levels.length && inputValue.toLowerCase() == levels[currentLevel].answer) {
        alert("Answer correct");
        score.value = Number(score.value) + 1;
        level.value = Number(level.value) + 1; // Move to next level

        if (levels[currentLevel].video) {
            // console.log(levels[currentLevel+1].video)
            video.children[0].src = levels[currentLevel+1].video;
            video.load();
        }
    } else {
        score.value = Number(score.value) - 1;
        alert("Answer incorrect or wrong level!");
    }

    return false;
}