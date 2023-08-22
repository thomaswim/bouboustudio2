import React, { useState, useEffect } from 'react';
import { db } from './firebase';  
import { onValue , ref} from 'firebase/database';

import HeaderBoubou from './components/Header';
import FeaturedCard from './components/FeaturedCard';
import Category from './components/Category';
import Modal from './components/Modal';
import TransparentNavbar from './components/TransparentNavbar';
import SerieModal from './components/ModalSerie';

const Home = () => {
    const [modalInfo, setModalInfo] = useState(null);
    const [categories, setCategories] = useState([]);
    const [bandeau, setBandeau] = useState({});

    const openModal = (film) => {
        setModalInfo(film);
    };

    const closeModal = () => {
        setModalInfo(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            const dbRef = ref(db); // Reference to the root of your database

            onValue(dbRef, (snapshot) => {
                const dbData = snapshot.val();
                setCategories(dbData.categories || []);
                setBandeau(dbData.header || {});
            });
        };

        fetchData();
    }, []);

    return (
        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
            <TransparentNavbar />
            {bandeau.film && 
                <FeaturedCard 
                    film={categories[bandeau.categorie]?.films[bandeau.film]} 
                    image={bandeau.image} 
                    imagexs={bandeau.imagexs} 
                    onCardClick={openModal} 
                />
            }
            {categories.map((category, index) => (
                <Category key={index} title={category.name} films={category.films} onCardClick={openModal} />
            ))}
            {modalInfo && modalInfo.isSeries 
                ? <SerieModal film={modalInfo} onClose={closeModal} /> 
                : modalInfo && <Modal film={modalInfo} onClose={closeModal} />
            }
        </div>
    );
}

export default Home;
