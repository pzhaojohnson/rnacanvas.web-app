import './styles.css';

import { RNAcanvas } from '@rnacanvas/app-object';

let rnaCanvas = new RNAcanvas();

rnaCanvas.appendTo(document.body);

rnaCanvas.drawDotBracket(
  'AGUCGUAGCGACUGGACUCGACAGCUAGUCUCGC',
  '...((((((.....))))))...',
);
