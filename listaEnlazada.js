class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
};
class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data, null);
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            };
            current.next = newNode;
        };
        this.size++
    };

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null
        };
        const newNode = new Node(data);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            this.head = newNode;

        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };


            newNode.next = current;
            previous.next = newNode;
        };
        this.size++;
    };
    print() {
        if (!this.size) {
            return null
        };
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data += '=>'
            current = current.next;
        };
        result += 'llegada';
        return result;
    };
    removeData(data) {
        let current = this.head;
        let previous = null;
        while (current != null) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                };
                this.else--;
                return current.data;
            };
            previous = current;
            current = current.next;
        };
    };

};

    var inicio = document.getElementById("partida").value;
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;
    var llegada = document.getElementById("llegada").value;

    miList.add(inicio);
    miList.add(p1);
    miList.add(p2);
    miList.add(p3);
    miList.add(llegada);
    console.log(miList);

