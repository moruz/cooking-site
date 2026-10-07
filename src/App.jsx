import Layout from './components/Layout.jsx';
import { AppStateProvider, useAppState } from './hooks/useAppState.jsx';
import { useHashRoute } from './hooks/useHashRoute.js';
import Cook from './pages/Cook.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import RecipeDetail from './pages/RecipeDetail.jsx';
import Recipes from './pages/Recipes.jsx';
import Tips from './pages/Tips.jsx';

function Favorites() {
  const { favorites } = useAppState();
  return <Recipes onlyFavorites favorites={favorites} />;
}

function Router() {
  const route = useHashRoute();

  // O modo cozinhar ocupa a tela toda, sem menus para distrair.
  if (route.name === 'cozinhar') return <Cook id={route.param} />;

  let page;
  switch (route.name) {
    case 'inicio': page = <Home />; break;
    case 'receitas': page = <Recipes />; break;
    case 'receita': page = <RecipeDetail id={route.param} />; break;
    case 'dicas': page = <Tips />; break;
    case 'favoritas': page = <Favorites />; break;
    default: page = <NotFound />;
  }
  return <Layout route={route}>{page}</Layout>;
}

export default function App() {
  return (
    <AppStateProvider>
      <Router />
    </AppStateProvider>
  );
}
