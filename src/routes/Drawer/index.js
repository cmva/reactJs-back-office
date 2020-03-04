import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AreaPanel,
  AreaDrawerPanel,
  AreaDrawer,
  AreaContent,
  IconUserList,
  IconRegisterUser,
} from './styles';
import * as HomeActions from '../../store/modules/home/actions';
import Header from '../../components/Header';
import Drawer from '../../components/Drawer';
import UserList from '../../pages/UserList';
import UserRegistration from '../../pages/UserRegister';

export default function Panel({ match: { path } }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [drawer, setDrawer] = useState({
    name: 'Empresa',
    subname: '',
    options: [
      {
        id: '1',
        name: 'Lista de usuários',
        open: false,
        link: `/`,
        icon: () => <IconUserList />,
        route: {
          path: `${path}/`,
          exact: true,
          main: () => <UserList />,
        },
        // suboptions: [],
        suboptions: [
          {
            id: '1',
            name: 'Lista de usuários',
            open: false,
            link: `/`,
            icon: () => <IconUserList />,
            route: {
              path: `${path}/`,
              exact: true,
              main: () => <UserList />,
            },
          },
        ],
      },
      {
        id: '2',
        name: 'Cadastro de usuários',
        open: false,
        link: `/registerUser`,
        icon: () => <IconRegisterUser />,
        route: {
          path: `${path}/registerUser`,
          exact: false,
          main: () => <UserRegistration />,
        },
        suboptions: [],
      },
    ],
  });
  const [drawerFind, setDrawerFind] = useState(drawer);
  const [searchText, setSearchText] = useState('');
  function functionOpenSuboption(indexParam, drawerParam) {
    const newOptions = drawerParam.options.map(
      (optionParam, indexOptionsParam) => {
        if (indexParam === indexOptionsParam) {
          return {
            ...optionParam,
            open: !optionParam.open,
          };
        }
        return { ...optionParam, open: false };
      }
    );
    setDrawerFind({ ...drawerParam, options: newOptions });
  }

  useEffect(() => {
    const newOptions = drawer.options.filter(element =>
      element.name.toLowerCase().includes(searchText)
    );
    const newDrawer = {
      ...drawer,
      options: newOptions,
    };
    setDrawerFind(newDrawer);
  }, [searchText]);//eslint-disable-line
  return (
    <Router>
      <AreaPanel>
        <Header
          functionOnClickDrawer={() => setOpenDrawer(!openDrawer)}
          openDrawer={openDrawer}
          functionOnClickUser={() => setOpenUser(!openUser)}
          openUser={openUser}
        />
        <AreaDrawerPanel>
          <AreaDrawer open={openDrawer}>
            <Drawer
              openDrawer={openDrawer}
              name={drawer.name}
              subname={drawer.subname}
              options={drawerFind.options}
              functionOnClickOpenSuboption={indexParam =>
                functionOpenSuboption(indexParam, drawerFind)
              }
              path={path}
              palceholderSearch="Digite a opção:"
              valueSearch={searchText}
              functionOnChangeTextSearch={text => setSearchText(text)}
            />
          </AreaDrawer>

          <AreaContent>
            <Switch>
              {drawer.options.map(({ route }, index) => {
                return (
                  <Route
                    key={index.toString()}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                );
              })}
            </Switch>
          </AreaContent>
        </AreaDrawerPanel>
      </AreaPanel>
    </Router>
  );
}
