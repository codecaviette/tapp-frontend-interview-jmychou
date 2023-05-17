import styled from 'styled-components';
import './index.css';
import { useState } from 'react';
import StyleIcon from '@mui/icons-material/Style';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircleIcon from '@mui/icons-material/Circle';

// Component Styles

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RootBox = styled.div`
  margin: auto 0;
  padding: 1rem;
`;

/** Sidebar view of the Editor page */
function Sidebar({ onUpdateTheme, siteThemes, theme, colors }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleChange = (event) => {
    onUpdateTheme(event.target.value);
  };

  console.log(colors.primary);
  return (
    <Root>
      <RootBox>
        <nav className='sidebar'>
          <div className={click ? 'sidebar-menu active' : 'sidebar-menu'}>
            <div>
              <div className='sidebar-title'>{'Site Styles'}</div>
              <div className='sidebar-item'>{'Theme'}</div>
              <div>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'> </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={theme}
                    label='Theme' 
                    onChange={handleChange}
                  >
                    <MenuItem value={'default'}>
                      Default
                      <CircleIcon
                        style={{ color: siteThemes.default.primary }}
                      />
                      <CircleIcon
                        style={{ color: siteThemes.default.secondary }}
                      />
                      <CircleIcon
                        style={{ color: siteThemes.default.tertiary }}
                      />
                    </MenuItem>
                    <MenuItem value={'natural'}>
                      Natural
                      <CircleIcon
                        style={{ color: siteThemes.natural.primary }}
                      />
                      <CircleIcon
                        style={{ color: siteThemes.natural.secondary }}
                      />
                      <CircleIcon
                        style={{ color: siteThemes.natural.tertiary }}
                      />
                    </MenuItem>
                    <MenuItem value={'lavendar'}>
                      Lavendar
                      <CircleIcon
                        style={{ color: siteThemes.lavendar.primary }}
                      />
                      <CircleIcon
                        style={{ color: siteThemes.lavendar.secondary }}
                      />
                      <CircleIcon
                        style={{ color: siteThemes.lavendar.tertiary }}
                      />
                    </MenuItem>
                    <MenuItem value={'urban'}>
                      Urban
                      <CircleIcon style={{ color: siteThemes.urban.primary }} />
                      <CircleIcon
                        style={{ color: siteThemes.urban.secondary }}
                      />
                      <CircleIcon
                        style={{ color: siteThemes.urban.tertiary }}
                      />
                    </MenuItem>
                    <MenuItem value={'ember'}>
                      Ember
                      <CircleIcon style={{ color: siteThemes.ember.primary }} />
                      <CircleIcon
                        style={{ color: siteThemes.ember.secondary }}
                      />
                      <CircleIcon
                        style={{ color: siteThemes.ember.tertiary }}
                      />
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='sidebar-item'>{'Theme Colors'}</div>
              
              <div>
                <CircleIcon fontSize='large' style={{ color: colors.primary }} />
                <CircleIcon fontSize='large' style={{ color: colors.secondary }} />
                <CircleIcon fontSize='large' style={{ color: colors.tertiary }} />
              </div>
            </div>
          </div>

          <div className='hamburger' onClick={handleClick}>
            {click ? (
              <StyleIcon
                sx={{
                  fontSize: 40,
                  color: colors.secondary,
                  backgroundColor: colors.primary,
                  borderRadius: 2,
                  padding: 0.3
                }}
              />
            ) : (
              <StyleIcon
                sx={{
                  fontSize: 40,
                  color: colors.secondary,
                  padding: 0.3
                }}
              />
            )}
          </div>
        </nav>
      </RootBox>
    </Root>
  );
}

export default Sidebar;
