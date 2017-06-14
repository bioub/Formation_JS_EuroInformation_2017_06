'use strict';

import { Horloge } from './horloge';

const conteneur = document.getElementById('horloge');
const horloge = new Horloge(conteneur);
horloge.start();
