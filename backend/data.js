import bcrypt from 'bcryptjs';
	

	const data = {
	  users: [
	    {
	      name: 'Admin',
	      email: 'admin@example.com',
	      password: bcrypt.hashSync('1234', 8),
	      status: 'admin'
	    },
	    {
	      name: 'John',
	      email: 'user@example.com',
	      password: bcrypt.hashSync('1234', 8),
	      status: 'member',
	    },
	  ],
	  products: [
	    {
	      name: 'Avocado, Large',
	      tags: ['vegetables'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668306/veges/avocado_dzlpve.png',
	      price: .69,
	      stock:55,
	      desc: '1 ct',
	

	    },
	    {
	      name: 'Cucumbers',
	      tags: ['vegetables'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668306/veges/Cucumbers_tgmdlm.png',
	      price: 1.20,
	      stock:66,
	      desc: '1 ct',
	

	    },
	    {
	      name: 'Green Bell Pepper',
	      tags: ['vegetables'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668306/veges/GreenBellPepper_osd0k5.webp',
	      price: .39,
	      stock:36,
	      desc: '1 ct',
	

	    },
	    {
	      name: 'Onion Red',
	      tags: ['vegetables'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668306/veges/OnionRed_lb82et.webp',
	      price: 1.09,
	      stock:68,
	      desc: '1 ct',
	    },
	    {
	      name: 'Eggplant',
	      tags: ['vegetables'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668305/veges/Eggplant_oqmxtd.webp',
	      price: 1.19,
	      stock:21,
	      desc: '1 ct',
	    },
	    {
	      name: 'Yams Red',
	      tags: ['vegetables'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668306/veges/yamsred_sieqfg.webp',
	      price: .79,
	      stock:44,
	      desc: '1 ct',
	    },
	    {
	      name: 'Green Giant Fresh Carrots',
	      tags: ['vegetables'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668306/veges/GreenGiantFreshCarrots_p6vrjx.webp',
	      price: .89,
	      stock: 10,
	      desc: '1 lb',
	    },
	    // fruits
	    {
	      name: 'Watermelons Seedless',
	      tags: ['fruits'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668308/fruits/WatermelonsSeedless_qqyiha.png',
	      price: 1.89,
	      stock:33,
	      desc: '1 ct',
	    },
	    {
	      name: 'Large Mangos',
	      tags: ['fruits'],
	      image: 'https://res.cloudinary.com/duaotrdm6/image/upload/v1610668307/fruits/mango_acl4iz.png',
	      price: .89,
	      stock:32,
	      desc: '1 ct',
	    },
],
	};
	export default data;
