// React
import {
  lazy,
  LazyExoticComponent
} from 'react';
// Layouts
import { NoLazy } from '../01-lazyload/pages';


type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layouts/LazyLayout' )
    .then( module => ({ default: module.LazyLayout }))
);

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout - Dash'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
];
