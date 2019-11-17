import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LangWrap, LanguageSwitcherWrap, Flag } from './StyledComponents';

const LanguageSwitcher = memo(({ languages, isOpenMenu, currentLang, handleOnClick }) => (
  <LanguageSwitcherWrap
    isOpenMenu={isOpenMenu}
  >
    {
      languages && languages.map((item) => {
        if (!isOpenMenu && currentLang === item.lang) {
          return (
            <LangWrap
              key={item.id}
              isCurrent={currentLang === item.lang}
            >
              <Flag src={item.flag} alt={item.lang} />
            </LangWrap>
          );
        }

        if (isOpenMenu) {
          return (
            <LangWrap
              key={item.id}
              isCurrent={currentLang === item.lang}
              isOpenMenu={isOpenMenu}
              onClick={() => handleOnClick(item.lang)}
            >
              <Flag src={item.flag} alt={item.lang} />
            </LangWrap>
          );
        }
        return null;
      })
    }
  </LanguageSwitcherWrap>
));

LanguageSwitcher.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      lang: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpenMenu: PropTypes.bool,
  currentLang: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
};

LanguageSwitcher.defaultProps = {
  currentLang: 'en',
  isOpenMenu: true,
};

export default LanguageSwitcher;
