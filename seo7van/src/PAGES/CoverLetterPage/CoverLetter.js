import './CoverLetter.css';

function CoverLetter() {

  const images = [
    "/images/CoverLetterImages/이력서 최종_1.png",
    "/images/CoverLetterImages/이력서 최종_2.png",
    "/images/CoverLetterImages/이력서 최종_3.png",
    "/images/CoverLetterImages/이력서 최종_4.png",
    "/images/CoverLetterImages/이력서 최종_5.png",
    "/images/CoverLetterImages/이력서 최종_6.png",
    "/images/CoverLetterImages/이력서 최종_7.png",
    "/images/CoverLetterImages/이력서 최종_8.png"
  ];  

    // 2장씩 묶어주는 로직
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push(images.slice(i, i + 2));
  }

  return (
    <div className="coverletter-container">
      {groupedImages.map((group, index) => (
        <div className="coverletter-page" key={index}>
          {group.map((src, idx) => (
            <img src={src} alt={`자기소개서 ${index * 2 + idx + 1}`} className="coverletter-image" key={idx} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CoverLetter;