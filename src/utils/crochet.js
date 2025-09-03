export const crochetStitches = {
    0: { // SC
        swatch: [
            { row: '0 →', pattern: 'Any number of sts (add 1 for base chain).', stitchCount: 11 },
            { row: '1 ←', pattern: 'Skip 1 ch, 1sc into next and each ch to end, turn.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch1, 1sc into 1st and each st to end, turn.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 10 }
        ],
        video: [
            { name: "Single Crochet", link: 'https://www.youtube.com/embed/Ik-GSXWoSak?si=NeYidY3cL9XNh2Fh' },
        ],
    },
    1: { // HDC
        swatch: [
            { row: '0 →', pattern: 'Any number of sts (add 1 for base chain).', stitchCount: 11 },
            { row: '1 ←', pattern: 'Skip 2 ch (count as 1hdc), 1hdc into next and each ch to end, turn.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch2, skip 1 st, 1hdc into next and each st to end working last st into top of tch, turn.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 10 }
        ],
        video: [
            { name: "Half-Double Crochet", link: 'https://www.youtube.com/embed/aD4CaRzBr5A?si=3GjZqPPd9CnoiVst'},
        ],
    },
    2: {  // DC
        swatch: [
            { row: '0 →', pattern: 'Any number of sts (add 2 for base chain).', stitchCount: 12 },
            { row: '1 ←', pattern: 'Skip 3 ch (count as 1dc), 1dc into next and each ch to end, turn.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch3, skip 1 st, 1dc into next and each st to end working last st into top of tch, turn.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 10 }
        ],
        video: [
            { name: "Double Crochet", link: 'https://www.youtube.com/embed/SWZ1zajDOHE?si=DJkWbb349KHhzWcN' },
        ],
    },
    3: {  // TR
        swatch: [
            { row: '0 →', pattern: 'Any number of sts (add 3 for base chain).', stitchCount: 13 },
            { row: '1 ←', pattern: 'Skip 4 ch (count as 1tr), 1tr into next and each ch to end, turn.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch4, skip 1 st, 1dc into next and each st to end working last st into top of tch, turn.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 10 }
        ],
        video: [
            { name: "Treble", link: 'https://www.youtube.com/embed/nBlloyEi-Z0?si=HhJ9DXgZGm9MSrU2' },
        ],
    },
    4: {  // HBhdc
        swatch: [
            { row: '0 →', pattern: 'Any number of sts (add 1 for base chain). Special abbreviation: HBhdc (Herringbone half-double crochet): yo, insert hook, yo, draw through st and 1st loop on hook, yo, draw through both loops on hook.', stitchCount: 11 },
            { row: '1 ←', pattern: 'Skip 2 ch (count as 1hdc), 1HBdc into next and each ch to end, turn.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch2 (count as 1hdc), skip 1 st, 1HBdc into next and each st to end working last st into top of tch, turn.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 10 }
        ],
        video: [
            { name: "Herringbone Half-Double Crochet", link: 'https://www.youtube.com/embed/H8pt_FySwGw?si=nNAdWZ-AwRsOdASY' },
        ],
    },
    5: {  // HBdc
        swatch: [
            { row: '0 →', pattern: 'Any number of sts (add 2 for base chain). Special abbreviation: HBdc (Herringbone double crochet): yo, insert hook, yo draw through st and 1st loop on hook, yo, draw through 1 loop, yo, draw through both loops on hook.', stitchCount: 12 },
            { row: '1 ←', pattern: 'Skip 3 ch (count as 1dc), 1HBdc into next and each ch to end, turn.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch3 (count as 1 dc), skip 1 st, 1HBdc into next and each st to end, working last st into to of tch, turn.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 10 }
        ],
        video: [
            { name: "Herringbone Double Crochet", link: 'https://www.youtube.com/embed/vDQvt9T0XuQ?si=d5_HuSbJG5pAQB23' },
        ],
    },
    6: {  // Sedge stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 3 sts + 1 (add 2 for base chain).', stitchCount: 15 },
            { row: '1 ←', pattern: '(RS) Skip 2 ch (count as 1 sc), work [1hdc, 1dc] into next ch, *skip 2 ch, work [1sc, 1hdc, 1dc] into next ch; rep from * to last 3ch, skip 2 ch, 1sc into last ch, turn.', stitchCount: 14 },
            { row: '2 →', pattern: 'Ch1 (count as 1 sc), work [1hdc, 1dc] into 1st st, *skip [1dc and 1hdc], work [1sc, 1hdc, 1dc] into next sc; rep from * to last 3 sts, skip [1dc and 1hdc], 1sc into top of tch. turn.', stitchCount: 14 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 14 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 14 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 14 }
        ],
        video: [
            { name: "Sedge Stitch", link: 'https://www.youtube.com/embed/1XAruj2im-g?si=Dh2DmfPh88Sl66hD' },
        ],
    },
    7: {  // Close chevron stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 11 sts + 1 (add 1 for base chain).', stitchCount: 24 },
            { row: '1 ←', pattern: '2s into 2nd ch from hook, *1sc into each of next 4 ch, 3sc into next ch; rep from * ending last rep with 2sc only into last ch, turn.', stitchCount: 23 },
            { row: '2 →', pattern: 'Ch1, 2sc into 1st st, *1 sc into each of next 4 sts, skip 2 sts, 1sc into each of next 4 sts, 3sc into next st; rep from * ending last rep with 2sc only into last st, skip tch, turn.', stitchCount: 23 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 23 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 23 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 23 }
        ],
        video: [
            { name: "Close Chevron Stitch", link: 'https://www.youtube.com/embed/KFcWl5NaF8A?si=0fs6HPUirFCUiUT4' },
        ],
    },
    8: {  // Ridged string network
        swatch: [
            { row: '0 →', pattern: 'Multiple of 11 sts + 1 (add 1 for base chain).', stitchCount: 14 },
            { row: '1 ←', pattern: '(RS) 1sc into 2nd ch from hook, *ch3, skip 3ch, 1sc into next ch; rep from * to end, turn.', stitchCount: 13 },
            { row: '2 →', pattern: 'Ch1, working into back loop only of each st work 1sc into 1st st, *ch3, skip ch-3, 1sc into next sc; rep from * to end, skip tch, turn.', stitchCount: 13 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 13 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 13 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 13 }
        ],
        video: [
            { name: "Ridged String Network", link: 'https://www.youtube.com/embed/hgvNKZN2avE?si=nyedUIV0cjr87MUI' },
        ],
    },
    9: {  // Plain trellis stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 4 sts + 3 (add 3 for base chain).', stitchCount: 18 },
            { row: '1 ←', pattern: '1sc into 6th ch from hook, *ch5, skip 3 ch, 1sc into next ch; rep from * to end, turn.', stitchCount: 19 },
            { row: '2 →', pattern: '*Ch5, 1sc into next ch-5 arch; rep from * to end, turn.', stitchCount: 24 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 24 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 24 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 24 }
        ],
        video: [
            { name: "Plain Trellis Stitch", link: 'https://www.youtube.com/embed/nGwBFA-aK3Q?si=4LFQGTgUDgOEKOrM' },
        ],
    },
    10: {  // Crunchy chevron stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 8 sts (add 1 for base chain).', stitchCount: 17 },
            { row: '1 ←', pattern: '1sc into 2nd ch from hook, 1sc into each of next 3 ch, *hdc2tog all into each of next 4 ch, 1sc into each of next 4 ch; rep from * to last 4 ch, hdc2tog all into each of last 4 ch, turn.', stitchCount: 16 },
            { row: '2 →', pattern: 'Ch1, 1sc into 1st and each st to end turn.', stitchCount: 16 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 16 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 16 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 16 }
        ],
        video: [
            { name: "Crunchy Chevron Stitch", link: 'https://www.youtube.com/embed/k2wGlr2FrZA?si=fkm-tOj6vRpzJ589' },
        ],
    },
    11: {  // Crunch stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 2 sts (add 1 for base chain).', stitchCount: 9 },
            { row: '1 ←', pattern: 'Skip 2 ch (count as 1hdc), *slip st into next ch, 1hdc into next ch; rep from * ending slip st into last ch, turn.', stitchCount: 8 },
            { row: '2 →', pattern: 'Ch2 (count as 1hdc), skip 1 st, *slip st into next hdc, 1hdc into next slio st; rep from * ending slip st into top of tch, turn.', stitchCount: 8 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 8 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 8 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 8 }
        ],
        video: [
            { name: "Crunch Stitch", link: 'https://www.youtube.com/embed/BIQiGbUTEPA?si=lT0Wy29W9k2mirmY' },
        ],
    },
    12: {  // Griddle stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 2 sts (add 2 for base chain).', stitchCount: 10 },
            { row: '1 ←', pattern: 'Skip 3 ch (count as 1dc), *1sc into next ch, 1dc into next ch; rep from * ending 1sc into last ch, turn.', stitchCount: 8 },
            { row: '2 →', pattern: 'Ch3 (count as 1dc), skip 1 st, *1sc into next dc, 1dc into next sc; rep from * ending 1sc into top of tch, turn.', stitchCount: 8 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 8 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 8 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 8 }
        ],
        video: [
            { name: "Griddle Stitch", link: 'https://www.youtube.com/embed/ijjxcV0TCPg?si=he7dkwKgh-0wDBy7' },
        ],
    },
    13: {  // Crosshatch stitch I
        swatch: [
            { row: '0 →', pattern: 'Multiple of 7 sts + 4 (add 3 for base chain).', stitchCount: 28 },
            { row: '1 ←', pattern: 'Skip 2 ch (count as 1dc), 2dc into next ch, *skip 3 ch, 1sc into next ch, ch3, 1dc into each of next 3 ch; rep from * to last 4 ch, skip 3 ch, 1sc into last ch, turn.', stitchCount: 25 },
            { row: '2 →', pattern: 'Ch3 (count as 1dc), 2dc into 1st sc, *skip 3dc, 1sc into 1st ch of ch-3, ch3, 1dc into each of next 2 ch, 1dc into next sc; rep from * ending skip 2 dc, 1sc into top of tch, turn.', stitchCount: 25 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 25 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 25 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 25 }
        ],
        video: [
            { name: "Crosshatch Stitch I", link: 'https://www.youtube.com/embed/YV0u6TQvDqo?si=WNVFq21U68msqZZB' },
        ],
    },
    14: {  // Singles and doubles
        swatch: [
            { row: '0 →', pattern: 'Any number of sts (add 1 for base chain).', stitchCount: 11 },
            { row: '1 ←', pattern: '(WS) Skip 2 ch (count as 1sc), 1sc into next and each ch to end, turn.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch3 (count as 1dc), skip 1 st, 1dc into next and each st to end, working last st into top of tch, turn.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Ch1 (count as 1sc), skip 1 st, 1sc into next and each st to end, working last st into top of tch, turn.', stitchCount: 10 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '5 ←', pattern: 'Repeat row 3.', stitchCount: 10 }
        ],
        video: [
            { name: "Singles & Doubles", link: '' },
        ],
    },
    15: {  // Chevron stitch I
        swatch: [
            { row: '0 →', pattern: 'Multiple of 16 sts + 2.', stitchCount: 34 },
            { row: '1 ←', pattern: '(RS) Work 2sc into 2nd ch from hook, *1sc into each of next 7 ch, skip 1 ch, 1sc into each of next 7 ch, 3sc into next ch; rep from * to end omitting 1sc at end of last rep, turn.', stitchCount: 35 },
            { row: '2 →', pattern: 'Ch1, work 2sc into 1st sc, *1sc into each of next 7 sc, skip 2 sc, 1sc into each of next 7 sc, 3sc into next sc; rep from * to end, omitting 1 sc at end of last rep, turn.', stitchCount: 35 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 35 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 35 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 35 }
        ],
        video: [
            { name: "Chevron Stitch", link: 'https://www.youtube.com/embed/2MWKOAaAp7U?si=7KFAyTK1nOtEbxFZ' },
        ],
    },
    16: {  // Block and offset shell stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 11 sts + 5 (add 2 for base chain).', stitchCount: 29 },
            { row: '1 ←', pattern: '(RS) Skip 3 ch (count as 1 dc), 1dc into each of next 4 ch, *skip 2 ch, 5dc into next ch, ch2, skip 3 ch, 1dc into each of next 5 ch; rep from * to end, turn.', stitchCount: 29 },
            { row: '2 →', pattern: 'Ch3 (count as 1 dc), skip 1st st, 1dc into each of next 4 sts, *skip ch-2, 5dc into next dc, ch2, skip 4 dc, 1dc into each of next 5 sts; rep from * to end, turn.', stitchCount: 29 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 29 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 29 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 29 }
        ],
        video: [
            { name: "Block & Offset Shell Stitch", link: 'https://www.youtube.com/embed/mFLXxOnu_DE?si=qHX9xwAZgZ7vr3m6' },
        ],
    },
    17: {  // Aligned cobble stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 2 sts + 1 (add 1 for base chain).', stitchCount: 10 },
            { row: '1 ←', pattern: '(RS) 1sc into 2nd ch from hook, 1sc into each ch to end, turn.', stitchCount: 9 },
            { row: '2 →', pattern: 'Ch1, 1sc into 1st st, *1tr into next st, 1sc into next st; rep from * to end, skip tch, turn.', stitchCount: 9 },
            { row: '3 ←', pattern: 'Ch1, 1sc into 1st st, 1sc into next and each st to end, skip tch, turn.', stitchCount: 9 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 9 },
            { row: '5 ←', pattern: 'Repeat row 3.', stitchCount: 9 }
        ],
        video: [
            { name: "Aligned Cobble Stitch", link: 'https://www.youtube.com/embed/mDUtoymX2pQ?si=5OMP0YpLsYX9LWUn' },
        ],
    },
    18: {  // Aligned puff stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 2 sts + 1 (add 1 for base chain).', stitchCount: 12 },
            { row: '1 ←', pattern: '(RS) 1sc into 2nd ch from hook, *ch1, skip 1ch, 1sc into next ch; rep from * to end, turn.', stitchCount: 11 },
            { row: '2 →', pattern: 'Ch2 (count as 1hdc), skip 1st st, *hdc4tog all into next ch sp, ch1, skip 1sc; rep from * ending hdc4tog into last ch sp, 1hdc into last sc, skip tch, turn.', stitchCount: 11 },
            { row: '3 ←', pattern: 'Ch1, 1sc into 1st st, *ch1, skip 1 st, 1sc into next ch sp; rep from * ending in top of tch, turn.', stitchCount: 11 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 11 },
            { row: '5 ←', pattern: 'Repeat row 3.', stitchCount: 11 }
        ],
        video: [
            { name: "Aligned Puff Stitch", link: 'https://www.youtube.com/embed/2dJKcNU6t0k?si=R2z6MieR6IP9igB6' },
        ],
    },
    19: {  // Grit stitch I
        swatch: [
            { row: '0 →', pattern: 'Multiple of 2 sts + 1 (add 2 for base chain).', stitchCount: 12 },
            { row: '1 ←', pattern: 'Skip 2 ch (count as 1sc), 1sc into next ch, *skip 1ch 2sc into next ch; rep from * to last 2 ch, skip 1 ch, 1sc into last ch, turn.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch1 (count as 1sc), 1dc into 1st st, *skip 1 dc, work [1sc and 1dc] into next sc; rep from * to last 2 sts, skip 1 dc, 1sc into top of tch, turn.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 10 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 10 }
        ],
        video: [
            { name: "Grit Stitch I", link: 'https://www.youtube.com/embed/AlNXJ3aAA5I?si=MuwTXVyyPFzzST0J' },
        ],
    },
    20: {  // Grit stitch II
        swatch: [
            { row: '0 →', pattern: 'Multiple of 2 sts + 1 (add 2 for base chain).', stitchCount: 13 },
            { row: '1 ←', pattern: 'Skip 2ch (count as 1sc), 1dc into ch, *skip 1 ch, work [1sc and 1dc] into next ch; rep from * to last 2 ch, skip 1ch, 1sc into last ch, turn.', stitchCount: 11 },
            { row: '2 →', pattern: 'Ch1 (count as 1 sc), 1dc into 1st st, *skip 1 dc, work [1sc and 1dc] into next sc; rep from * to last 2 sts, skip 1dc, 1sc into top of tch, turn.', stitchCount: 11 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 11 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 11 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 11 }
        ],
        video: [
            { name: "Grit Stitch II", link: 'https://www.youtube.com/embed/24A_NxyaoMg?si=NcjoxStXTzP3rNQ3' },
        ],
    },
    21: {  // Column and bowl
        swatch: [
            { row: '0 →', pattern: 'Multiple of 8 sts + 12.', stitchCount: 28 },
            { row: '1 ←', pattern: '(RS) Work 5tr into 8th ch from hook, skip 3 ch, 1tr into next ch, *skip 3 ch, 5tr into next ch, skip 3 ch, 1tr into next ch; rep from * to end, turn.', stitchCount: 18 },
            { row: '2 →', pattern: 'Ch4 (count as 1tr), 2tr into 1st tr, skip 2 tr, 1tr into next tr, *skip 2 tr, 5tr into next tr, skip 2 tr, 1tr into next tr; rep from * to last 3 sts, skip 2 tr, 3tr into next ch, turn.', stitchCount: 19 },
            { row: '3 ←', pattern: 'Ch4, skip 1st tr, *skip 2 tr, 5tr into next tr, skip 2 tr, 1tr into next tr; rep from * to end placing last tr into 4th of ch-4 at beg of previous row, turn.', stitchCount: 18 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 19 },
            { row: '5 ←', pattern: 'Repeat row 3.', stitchCount: 18 }
        ],
        video: [
            { name: "Column & Bowl", link: 'https://www.youtube.com/embed/BRxYxKWc3bk?si=DK372LocTQaMaUOY' },
        ],
    },
    22: {  // Double crochet V stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 2 sts (add 2 for base chain).', stitchCount: 12 },
            { row: '1 ←', pattern: '(RS) 2dc into 4th ch from hook, *skip 1ch, 2dc into next ch; rep from * to last 2 ch, skip 1 ch, 1dc into last ch, turn.', stitchCount: 9 },
            { row: '2 →', pattern: 'Ch3, *skip 2 sts, 2dc between 2nd skipped st and next st; rep from * to last 2 sts, skip 1 st, 1dc into top of tch, turn.', stitchCount: 9 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 9 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 9 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 9 }
        ],
        video: [
            { name: "Double Crochet V Stitch", link: 'https://www.youtube.com/embed/rY9nyIY41Uk?si=JQXNh-pEwEiGO_8Z' },
        ],
    },
    23: {  // Offset V stitch
        swatch: [
            { row: '0 →', pattern: 'Multiple of 3 sts + 1 (add 3 for base chain).', stitchCount: 16 },
            { row: '1 ←', pattern: '(RS) 1dc into 4th ch from hook, *skip 2 ch, work a V st of [1dc, ch1, 1dc] into next ch; rep from * to last 3 ch, skip 2 ch, 1dc into last ch, turn.', stitchCount: 11 },
            { row: '2 →', pattern: 'Ch4, 1dc into first st, *V st into 2nd dc of next V st; rep from * until 1 dc and tch remain, skip dc and 1 ch, 1dc into next ch, turn.', stitchCount: 11 },
            { row: '3 ←', pattern: 'Repeat row 2.', stitchCount: 11 },
            { row: '4 →', pattern: 'Repeat row 2.', stitchCount: 11 },
            { row: '5 ←', pattern: 'Repeat row 2.', stitchCount: 11 }
        ],
        video: [
            { name: "Offset V Stitch", link: 'https://www.youtube.com/embed/BQLTV6rGClU?si=0aNni3XkxmreTf08' },
        ],
    },
    24: {  // Traditional square I
        swatch: [
            { row: '0 →', pattern: 'Ch4, join with slip st (base ring).', stitchCount: 4 },
            { row: '1 ←', pattern: 'Ch5 (count as 1dc, ch2), [3dc into ring, ch2] 3 times, 2dc into ring, slip st to 3rd of ch-5.', stitchCount: 20 },
            { row: '2 →', pattern: 'Slip st into next sp, ch5 (count as 1dc, ch2), 3dc into same sp, *ch1, skip 3 dc, [3dc, ch2, 3dc] into next sp; rep from *twice more, ch1, skip 3 sts, 2dc into same sp as ch-5 at beg of round, slip st to 3rd of ch-5.', stitchCount: 36 },
            { row: '3 ←', pattern: 'Slip st into next sp, ch5 (count as 1dc, 2ch), 3dc into same sp, *ch1, skip 3 dc**, [3dc, ch2, 3dc] into next sp; rep from *twice more and from * to ** again, 2dc into same sp as ch-5, slip st to 3rd of ch-5. ', stitchCount: 52 },
            { row: '4 →', pattern: 'Slip st into next sp, ch5 (count as 1dc, ch2) 3dc into same sp, *[ch1, skip 3 dc, 3dc into next sp] twice, ch1, skip 3 dc**. [3dc, ch2, 3dc] into next sp; rep from * twice more and from * to ** again, 2dc into same sp as ch-5, slip st to 3rd of ch-5.', stitchCount: 68 },
            { row: '5 ←', pattern: 'Fasten off.', stitchCount: 0 }
        ],
        video: [
            { name: "Traditional Square", link: 'https://www.youtube.com/embed/PwIkjZVd198?si=TXuOZHkkBCmzW5Sd' },
        ],
    },
    25: {  // Double crochet square I
        swatch: [
            { row: '0 →', pattern: 'Ch4, join with slip st (base ring).', stitchCount: 4 },
            { row: '1 ←', pattern: 'ch5 (count as 1dc, ch2), [3dc into ring, ch2] 3 times, 2dc into ring, slip st to 3rd of ch-5, (4 groups of 3dc).', stitchCount: 20 },
            { row: '2 →', pattern: 'Slip st into next sp, ch7 (count as 1dc, ch4), *2dc into same sp, 1dc into each dc across side of square**, 2dc into next sp, ch4; rep from * twice more and from * to ** again, 1dc into same sp as ch-7, slip st to 3rd of ch-7 (4 groups of 7dc).', stitchCount: 44 },
            { row: '3 ←', pattern: 'As round 2 (4 groups of 11dc).', stitchCount: 60 },
            { row: '4 →', pattern: 'As round 2 (4 groups of 15dc).', stitchCount: 76 },
            { row: '5 ←', pattern: 'Fasten off.', stitchCount: 0 }
        ],
        video: [
            { name: "Double Crochet Square", link: 'https://www.youtube.com/embed/1xp4lgNQrvI?si=5-yoo_IFe2TcGjV0' },
        ],
    },
    26: {  // Mosaic tile
        swatch: [
            { row: '0 →', pattern: 'Using A, ch6, join with slip st.', stitchCount: 6 },
            { row: '1 ←', pattern: 'Ch4, [1dc, ch1] 11 times into ring, slip st to 3rd of ch-4, draw B through loop, drop A.', stitchCount: 23 },
            { row: '2 →', pattern: '[1sc into next sp, ch2] 12 times, slip st to 1st sc, draw A through loop, drop B.', stitchCount: 36 },
            { row: '3 ←', pattern: '*[1sc into next sp, ch2] twice, [2dc, ch2] twice into next sp for corner; rep from * 3 times more, slip st to 1st sc, draw B through loop, cast off A.', stitchCount: 56 },
            { row: '4 →', pattern: '*(1sc, ch3) into each sp to corner, [1sc, ch3] twice into corner sp; rep from * 3 times more, slip st to 1st sc.', stitchCount: 80 },
            { row: '5 ←', pattern: 'Fasten off.', stitchCount: 0 }
        ],
        video: [
            { name: "Mosaic Tile", link: '' },
        ],
    },
    27: {  // Springtime blossom
        swatch: [
            { row: '0 →', pattern: 'Ch6, join with slip st (base ring).', stitchCount: 6 },
            { row: '1 ←', pattern: 'Ch3 (count as 1dc), 15dc into ring, slip st to top of ch-3.', stitchCount: 16 },
            { row: '2 →', pattern: 'Ch5 (count as 1dc, ch2), 1dc into same st as last slip st, *ch1, skip 1 dc, [1dc, ch2, 1dc] into next dc; rep from * 6 more times, ch1, slip st to 3rd of ch-5.', stitchCount: 40 },
            { row: '3 ←', pattern: 'Slip st into 1st ch-2 sp, ch3 (count as 1dc), [1dc, ch2, 2dc] into same sp, *ch1, [2dc, ch2, 2dc] into next ch-2 sp; rep from * 6 more times, ch1, slip st to top of ch-3.', stitchCount: 56 },
            { row: '4 →', pattern: 'Slip st into next dc and 1st ch-2 sp, ch3, 6dc into same sp as last sl st, 1sc into next ch sp, [7dc into next ch-2 sp, 1sc into next ch sp] 7 times, slip st into top of ch-3.', stitchCount: 64 },
            { row: '5 ←', pattern: 'Fasten off.', stitchCount: 0 }
        ],
        video: [
            { name: "Springtime Blossom", link: '' },
        ],
    },
    28: {  // Springtime
        swatch: [
            { row: '0 →', pattern: 'Ch5, join with slip st (base ring).', stitchCount: 5 },
            { row: '1 ←', pattern: 'Ch1, 10sc into ring, slip st into 1st sc.', stitchCount: 10 },
            { row: '2 →', pattern: 'Ch1, 1sc into each sc, slip st to 1st sc.', stitchCount: 10 },
            { row: '3 ←', pattern: 'Ch2 (count as hdc), skip 1st sc, 2hdc into each of next 9 sc, 1hdc into 1st sc, slip st into 2nd of ch-2.', stitchCount: 20 },
            { row: '4 →', pattern: '*Ch2, working into front loop only of hdc, 2dc into each of next 3hdc, ch2, slip st into next hdc; rep from * 4 times more placing last slip st into 2nd of ch-2 at bed of previous round (5 petals made).', stitchCount: 55 },
            { row: '5 ←', pattern: 'Working behind each petal of previous round and and into back loop of each hdc on round 3, slip st into 1st 2 hdc, *ch4, 2dtr into each of next 3 hdc, ch4, slip st into next hdc; rep from * 3 times more, ch4, 2dtr into next hdc, 2dtr into next hdc, 2dtr into 2nd of ch-2 at bed of round 3, 2dtr into next hdc, ch4, slip st to next hdc. Fasten off.', stitchCount: 74 }
        ],
        video: [
            { name: "Springtime", link: '' },
        ],
    },
    29: {  // Snowflake II
        swatch: [
            { row: '0 →', pattern: 'Ch6, join with slip st (base ring).', stitchCount: 6 },
            { row: '1 ←', pattern: 'Ch1, [1sc into ring, ch7] 6 times, slip st to 1st sc (6 loops).', stitchCount: 48 },
            { row: '2 →', pattern: '*Ch1, into next ch-7 sp work [2sc, 1hdc, 3dc, 3tr, 3dc, 1hdc, 2sc], ch1, slip st into next sc; rep from * 5 times more.', stitchCount: 84 },
            { row: '3 ←', pattern: '7slip sts to center tr, *ch4, slip st into same tr, ch8, slip st on to of next tr; rep from * around.', stitchCount: 84 },
            { row: '4 →', pattern: 'Slip st into ch-4 loop, *ch1, work 1sc, 2dc, ch2, [3dc, ch2] twice, 2dc, 1sc into same sp, ch1, 6sc into next ch-8 sp; rep from * around, slip st to 1st sc.', stitchCount: 156 },
            { row: '5 ←', pattern: 'Fasten off.', stitchCount: 0 }
        ],
        video: [
            { name: "Snowflake", link: '' },
        ],
    },
}

export const stitchDiagrams = {
    "Single Crochet": "/sc.png",
    "Half-Double Crochet": "/hdc.png",
    "Double Crochet": "/dc.png",
    "Treble": "/tr.png",
    "Herringbone Half-Double Crochet": "/hbhdc.png",
    "Herringbone Double Crochet": "/hbdc.png",
    "Sedge Stitch": "/sedge-stitch.png",
    "Close Chevron Stitch": "/close-chevron-stitch.png",
    "Ridged String Network": "/ridged-string-network.png",
    "Plain Trellis Stitch": "/plain-trellis-stitch.png",
    "Crunchy Chevron Stitch": "/crunchy-chevron-stitch.png",
    "Crunch Stitch": "/crunch-stitch.png",
    "Griddle Stitch": "/griddle-stitch.png",
    "Crosshatch Stitch I": "/crosshatch-stitch.png",
    "Singles & Doubles": "/singles-and-doubles.png",
    "Chevron Stitch": "/chevron-stitch.png",
    "Block & Offset Shell Stitch": "/block-and-offset-shell-stitch.png",
    "Aligned Cobble Stitch": "/aligned-cobble-stitch.png",
    "Aligned Puff Stitch": "/aligned-puff-stitch.png",
    "Grit Stitch I": "/grit-stitch-1.png",
    "Grit Stitch II": "/grit-stitch-2.png",
    "Column & Bowl": "/column-and-bowl.png",
    "Double Crochet V Stitch": "/dc-v-stitch.png",
    "Offset V Stitch": "/offset-v-stitch.png",
    "Traditional Square": "/traditional-square.png",
    "Double Crochet Square": "/double-square.png",
    "Mosaic Tile": "/mosaic-tile.png",
    "Springtime Blossom": "/springtime-blossom.png",
    "Springtime": "/springtime.png",
    "Snowflake": "/snowflake.png",
}