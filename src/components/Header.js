import { useNavigate } from "react-router-dom";
import '../styles/header.css';

const Header = ({ onScrollToSection }) => {
  const navigate = useNavigate();

  // 로고 클릭 시 메인 화면으로 이동
  const handleLogoOnClick = () => {
    navigate('/');
  };

  // 네비게이션 버튼 클릭 시, 메인 화면으로 이동 후 섹션으로 스크롤
  const handleSection = (section) => {
    if (window.location.pathname !== "/") {
      // 현재 페이지가 메인 화면이 아닐 경우, 메인 화면으로 이동
      navigate('/');
    }
    // 섹션으로 스크롤
    onScrollToSection(section);
  };

  const handleStoryOnClick = () => {
	navigate('/story');
  }

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoOnClick}>
        <h1>어서와요 기다렸어요</h1>
        <h3 className="sub-title">until you find me</h3>
      </div>
      <nav className="navigation">
        <div className="nav-buttons">
          <button className="nav-button" onClick={() => handleSection('oneYear')}>
            1주년
          </button>
          <button className="nav-button" onClick={() => handleSection('longest')}>
            가장 오래 기다린
          </button>
          <button className="nav-button" onClick={handleStoryOnClick}>
            소개글
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

