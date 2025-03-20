document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = {
        "nữ": 0,
        "nam": 0,
        "cơm": 0,
        "ăn vặt": 0,
        "ngủ": 0,
        "học": 0
    };

    // Lấy giá trị câu trả lời từ form
    const q1Answer = document.querySelector('input[name="q1"]:checked')?.value;
    const q2Answer = document.querySelector('input[name="q2"]:checked')?.value;
    const q3Answer = document.querySelector('input[name="q3"]:checked')?.value;

    // Tính điểm cho các nhóm
    if (q1Answer) score[q1Answer]++;
    if (q2Answer) score[q2Answer]++;
    if (q3Answer) score[q3Answer]++;

    // Kiểm tra kết quả
    const group1 = [score["nữ"], score["cơm"], score["ngủ"]];
    const group2 = [score["nam"], score["ăn vặt"], score["học"]];

    // Xác định điểm số
    if (group1.filter(answer => answer > 0).length >= 2) {
        document.getElementById('result').textContent = "Điểm của bạn: Bạn bị gay";
    } else if (group2.filter(answer => answer > 0).length >= 2) {
        document.getElementById('result').textContent = "Điểm của bạn: Bạn là trai thẳng";
    } else {
        document.getElementById('result').textContent = "Điểm của bạn: Không xác định";
    }
});