import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components/';

import LoadigBlock from '../components/PizzaBlock/LoadigBlock';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
    const dispatch = useDispatch();

    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, []);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryName} onClickItem={onSelectCategory} />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
                {Array(10).fill()}
            </div>
        </div>
    );
}

export default Home;
