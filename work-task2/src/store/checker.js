import { makeAutoObservable, makeObservable } from 'mobx'
import { PropTypes } from 'prop-types';

class Checker {
    static propTypes = {
        table1: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            name: PropTypes.String,
            selected: PropTypes.bool
        })),
        table2: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            name: PropTypes.String,
            selected: PropTypes.bool
        })),
        table3: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            name: PropTypes.String,
            selected: PropTypes.bool
        })),
        tableMain: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            name: PropTypes.String,
            channels: PropTypes.string,
            isNeeded: PropTypes.bool,
        })),
        stateIsChanged: PropTypes.bool,
        currentChannels: PropTypes.objectOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])),
        changeState: PropTypes.func,
        showResult: PropTypes.func,
    }
    table1 = [
        { id: 1, name: 'Напряжение', selected: true },
        { id: 2, name: 'Термопара', selected: false },
        { id: 3, name: 'Термометр сопротивления', selected: false },
        { id: 4, name: 'Ток', selected: false },
        { id: 5, name: 'Сопротивление', selected: false },
        { id: 6, name: 'СКЗ напряжения переменного тока', selected: false },
        { id: 7, name: 'Двуполярное напряжение', selected: false },
        { id: 8, name: 'СКЗ силы переменного тока', selected: false },
        { id: 9, name: 'Двуполярная сила тока', selected: false },
        { id: 10, name: 'Частота', selected: false },
        { id: 11, name: 'Tenso', selected: false },
        { id: 12, name: 'Уровень лог.1', selected: false },
        { id: 13, name: 'Твердотельное реле', selected: false },
        { id: 14, name: 'Эм.реле', selected: false },
        { id: 15, name: 'DryCon (Сухой контакт)', selected: false },
        { id: 18, name: '1-Wire', selected: false },
        { id: 19, name: 'Потенциометр', selected: false },
        { id: 20, name: 'Освещенность', selected: false },

    ]
    table2 = [
        { id: 1, name: '0..15 мВ', selected: true },
        { id: 2, name: '0..30 мВ', selected: false },
        { id: 3, name: '0..60 мВ', selected: false },
        { id: 4, name: '0..125 мВ', selected: false },
        { id: 5, name: '0..250 мВ', selected: false },
        { id: 6, name: '0..500 мВ', selected: false },
        { id: 7, name: '0..1 В', selected: false },
        { id: 8, name: '0..2 В', selected: false },
        { id: 9, name: '0..5 В', selected: false },
        { id: 10, name: '0..10 В', selected: false },
        { id: 11, name: '0..20 В', selected: false },
        { id: 12, name: '0..40 В', selected: false },
        { id: 13, name: '0..80 В', selected: false },
        { id: 14, name: '0..160 В', selected: false },
        { id: 15, name: '0..300 В', selected: false },
        { id: 16, name: '0..600 В', selected: false },
        { id: 17, name: '0..15 Ом', selected: false },
        { id: 18, name: '0..30 Ом', selected: false },
        { id: 19, name: '0..60 Ом', selected: false },
        { id: 20, name: '0..125 Ом', selected: false },
        { id: 21, name: '0..250 Ом', selected: false },
        { id: 22, name: '0..500 Ом', selected: false },
        { id: 23, name: '0..1 кОм', selected: false },
        { id: 24, name: '0..2 кОм', selected: false },
        { id: 25, name: 'Тип B (ТПР)', selected: false },
        { id: 26, name: 'Тип E (ТХКн)', selected: false },
        { id: 27, name: 'Тип J (ТЖК)', selected: false },
        { id: 28, name: 'Тип K (ТХА)', selected: false },
        { id: 29, name: 'Тип N (ТНН)', selected: false },
        { id: 30, name: 'Тип R (ТПП13)', selected: false },
        { id: 31, name: 'Тип S (ТПП10)', selected: false },
        { id: 32, name: 'Тип T (ТМКн)', selected: false },
        { id: 33, name: '50М (ТСМ50)', selected: false },
        { id: 34, name: '100М (ТСМ100)', selected: false },
        { id: 35, name: '50П (ТСП50)', selected: false },
        { id: 36, name: '100П (ТСП100)', selected: false },
        { id: 37, name: '0..1 мА', selected: false },
        { id: 38, name: '0..2 мА', selected: false },
        { id: 39, name: '0..5 мА', selected: false },
        { id: 40, name: '1..5 мА', selected: false },
        { id: 41, name: '0..10 мА', selected: false },
        { id: 42, name: '0..20 мА', selected: false },
        { id: 43, name: '4..20 мА', selected: false },
        { id: 44, name: '0..50 мА', selected: false },
        { id: 45, name: '0..100 мА', selected: false },
        { id: 46, name: '0..200 мА', selected: false },
        { id: 47, name: '0..500 мА', selected: false },
        { id: 48, name: '0..1 А', selected: false },
        { id: 49, name: '0..2 А', selected: false },
        { id: 50, name: '0..5 А', selected: false },
        { id: 51, name: '-10..+10 В', selected: false },
        { id: 52, name: '-1..+1 В', selected: false },
        { id: 53, name: '-2..+2 В', selected: false },
        { id: 54, name: '-5..+5 В', selected: false },
        { id: 55, name: '0..5 кОм', selected: false },
        { id: 56, name: 'Taсho', selected: false },
        { id: 57, name: 'Tenso', selected: false },
        { id: 58, name: '160-270В AC/DC', selected: false },
        { id: 59, name: '100mA-270V', selected: false },
        { id: 60, name: '+ /- 15 В', selected: false },
        { id: 61, name: '+/- 30 В', selected: false },
        { id: 62, name: 'Запитка 12В', selected: false },
        { id: 63, name: '10-30В АС/DC ', selected: false },
        { id: 64, name: 'Запитка 24В', selected: false },
        { id: 65, name: '100mA-30V', selected: false },
        { id: 66, name: '5А-270V', selected: false },
        { id: 67, name: '0,5 А', selected: false },
        { id: 68, name: '5 А', selected: false },
        { id: 69, name: '8 А', selected: false },
        { id: 70, name: '16 А', selected: false },
        { id: 71, name: '0-20 кОм', selected: false },
        { id: 72, name: ' Запитка 3,3 В', selected: false },
        { id: 75, name: 'Pt100', selected: false },
        { id: 76, name: '0..25 мВ', selected: false },
        { id: 77, name: '0..75 мВ', selected: false },
        { id: 78, name: '1хDS18B20', selected: false },
        { id: 79, name: '1хDS18B20/1хDHT11/1хDHT22', selected: false },
        { id: 80, name: '8хDS18B20', selected: false },
        { id: 81, name: '16хDS18B20', selected: false },
        { id: 82, name: '24хDS18B20', selected: false },
        { id: 83, name: '32хDS18B20', selected: false },
        { id: 84, name: '50хDS18B20', selected: false },
        { id: 85, name: '+/- 6.8V', selected: false },
        { id: 86, name: 'Тип L (ТХК)', selected: false },
        { id: 87, name: '-300...+300 В', selected: false },
        { id: 88, name: '100mA-300V', selected: false },
        { id: 89, name: '160-270В AC', selected: false },
        { id: 90, name: '0..400 В', selected: false },
        { id: 91, name: '16-27B AC/DC', selected: false },
        { id: 92, name: '-600...+600 В', selected: false },
        { id: 93, name: '~250В AC', selected: false },
        { id: 94, name: '0-15 кОм', selected: false },
        { id: 95, name: '-750..+750 В', selected: false },
        { id: 96, name: ' -150..+150 мВ', selected: false },
        { id: 97, name: 'Pt1000', selected: false },
        { id: 98, name: '16-27В DC', selected: false },
        { id: 99, name: '-20..0 В', selected: false },
        { id: 101, name: 'NTC2k', selected: false },
        { id: 102, name: 'NTC5k', selected: false },
        { id: 103, name: 'NTC20k', selected: false },
        { id: 104, name: 'NTC50k', selected: false },
        { id: 105, name: '-75...+75 мВ', selected: false },
        { id: 106, name: '-300...+300 В', selected: false },
        { id: 107, name: '-60... +60 мВ', selected: false },
        { id: 108, name: '0..-10В', selected: false },
        { id: 109, name: '-20...+20 В', selected: false },
        { id: 110, name: '-250...+250 мВ', selected: false },
        { id: 111, name: '-5...+5 А', selected: false },
        { id: 112, name: '10-30В DC ', selected: false },
        { id: 113, name: '14хDS18B20', selected: false },
        { id: 114, name: '-500... +500 мА', selected: false },
        { id: 115, name: '0..10 Гц', selected: false },
        { id: 116, name: '0..100 Гц', selected: false },
        { id: 117, name: '0..1 кГц', selected: false },
        { id: 118, name: '0..10 кГц', selected: false },
        { id: 119, name: '0..100 кГц', selected: false },
        { id: 120, name: '0..1 МГц', selected: false },
        { id: 121, name: '250мА-400В', selected: false },
        { id: 122, name: '0..10000 лк', selected: false },
    ];

    table3 = [
        { id: 1, name: '2-х проводная', selected: true },
        { id: 2, name: '3-х проводная', selected: false },
        { id: 3, name: '4-х проводная', selected: false },
        { id: 6, name: '2-х, 3-х проводная', selected: false },
    ];

    tableMain = [
        { id: 1, name: 'WAD-2A-MAX', channels: '2,3,3', isNeeded: false },
        { id: 2, name: 'WAD-2A-MAX', channels: '2,4,4', isNeeded: false },
        { id: 3, name: 'WAD-2A-MAX', channels: '10,3,5', isNeeded: false },
        { id: 4, name: 'WAD-2A-MAX', channels: '14,15,4', isNeeded: false },
        { id: 5, name: 'WAD-2A-MAX', channels: '14,3,4', isNeeded: false },
        { id: 6, name: 'WAD-2A-MAX', channels: '14,4,4', isNeeded: false },
        { id: 9, name: 'WAD-2A-MAX', channels: '17,3,4', isNeeded: false },
        { id: 10, name: 'WAD-2A-MAX', channels: '10,18,4', isNeeded: false },
        { id: 11, name: 'WAD-2A-MAX', channels: '12,13,13', isNeeded: false },
        { id: 12, name: 'WAD-2A-MAX', channels: '14,3,3', isNeeded: false },
        { id: 13, name: 'WAD-A-MAX', channels: '13,2', isNeeded: false },
        { id: 14, name: 'WAD-A-MAX', channels: '12,3', isNeeded: false },
        { id: 15, name: 'WAD-A-MAX', channels: '1,13', isNeeded: false },
        { id: 16, name: 'WAD-A-MAX', channels: '20,3', isNeeded: false },
        { id: 17, name: 'WAD-A-MAX', channels: '10,20', isNeeded: false },
        { id: 18, name: 'WAD-A-MAX', channels: '19,4', isNeeded: false },
        { id: 19, name: 'WAD-A-MAX', channels: '15,20', isNeeded: false },
        { id: 20, name: 'WAD-A-MAX', channels: '21,3', isNeeded: false },
        { id: 21, name: 'WAD-A-MAX', channels: '21,49', isNeeded: false },
        { id: 22, name: 'WAD-A-MAX', channels: '15,22', isNeeded: false },
        { id: 23, name: 'WAD-A-MAX', channels: '22,3', isNeeded: false },
        { id: 24, name: 'WAD-A-MAX', channels: '22,49', isNeeded: false },
        { id: 25, name: 'WAD-A-MAX', channels: '23,4', isNeeded: false },
        { id: 27, name: 'WAD-A-MAX', channels: '2,3', isNeeded: false }
    ]
    
    stateIsChanged = false;
    currentChannels = { id1: '1', id2: '1', id3: '1' };
    constructor() {
        makeAutoObservable(this);
    }

    changeState(e) {
        const selectedId = e.target.value;
        const myTable = e.target.getAttribute('id');
        if (myTable == 'table1') {
            this.table1.map((item, index) => {
                if (item.id == selectedId) {
                    return item.selected = true;
                } else {

                    return item.selected = false;
                }

            })
        }
        else if (myTable == 'table2') {
            this.table2.map((item, index) => {
                if (item.id == selectedId) {
                    return item.selected = true;
                } else {
                    return item.selected = false;
                }

            })
        }
        else if (myTable == 'table3') {
            this.table3.map((item, index) => {
                if (item.id == selectedId) {
                    return item.selected = true;
                } else {
                    return item.selected = false;
                }

            })
        }
        this.showResult(e)
    }
    showResult(e) {
        this.stateIsChanged = !this.stateIsChanged
        this.table1.map((item) => {
            if (item.selected) {
                this.currentChannels.id1 = `${item.id}`;
            }
        })
        this.table2.map((item) => {
            if (item.selected) {
                this.currentChannels.id2 = `${item.id}`;
            }
        })
        this.table3.map((item) => {
            if (item.selected) {
                this.currentChannels.id3 = `${item.id}`
            }
        })
        let myId = this.currentChannels.id1 + ',' + this.currentChannels.id2 + "," + this.currentChannels.id3
        let arrMyId = myId.split(',');
        this.tableMain.map((item) => {
            if (item.channels.split(',').length >= 3) {
                if (item.channels == myId) {
                    return item.isNeeded = true;
                } else {
                    return item.isNeeded = false;
                }
            }
            else {
                const myChannel = item.channels.split(',')
                if (arrMyId[0] == myChannel[0] && arrMyId[1] == myChannel[1]) {
                    return item.isNeeded = true;
                } else {
                    return item.isNeeded = false;
                }
            }

        })

    }
}




export default new Checker();