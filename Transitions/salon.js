import faker from 'faker';
import nicecolors from 'nice-color-palettes';
faker.seed(1);

const colors = [
    ...nicecolors[1].slice(1, nicecolors[1].length),...nicecolors[55].slice(0,3),
];

const data = [
    {image: 'https://flaticon.com/icons/png/256/435/435041.png'},
    {image: 'https://flaticon.com/icons/png/256/435/435041.png'},
    {image: 'https://flaticon.com/icons/png/256/435/435041.png'},
    {image: 'https://flaticon.com/icons/png/256/435/435041.png'},
    {image: 'https://flaticon.com/icons/png/256/435/435041.png'},
];

export const detailsIcons = [
    {color: '#9FD7F1', icon: 'isv'},
    {color: '#F3B000', icon: 'Trophy'},
    {color: '#F2988F', icon: 'edit'}
];

export default data.map((item, index) => ({
    ...item,
    key: faker.random.uuid(),
    color: colors[index % colors.length],
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    categories: [...Array(3).keys()].map(() => {
        return {
            key: faker.random.uuid(),
            title: faker.name.jobType(),
            subcats: [...Array(3).keys()].map(faker.name.jobType)
        };
    }),
}));