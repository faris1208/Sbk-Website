import React from 'react';
import styles from '../list-items/styles.module.scss';
import { Product } from '@/components/data';
import Card from '@/components/card';

interface ListpageProps {
  wishlistItems: Product[];
  removeFromWishlist: (id: string) => void;
}

const Listpage: React.FC<ListpageProps> = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <div className={styles.grid}>
      {wishlistItems.map((item) => (
        <Card
        id={item.id}
          key={item.id}
          img={item.img}
          name={item.name}
          oldPrice={item.old}
          newPrice={item.new}
          isInWishlist={true}
          isWishlistPage={true}
          onToggleWishlist={() => removeFromWishlist(item.id)}
        />
      ))}
    </div>
  );
};

export default Listpage;