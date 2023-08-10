// TrieNode class
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

// Trie class
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("app"));     // Output: true
console.log(trie.search("ap"));      // Output: false

// Example usage
const trie2 = new Trie();
trie2.insert("programming");
trie2.insert("code");
console.log(trie2.search("programming"));  // Output: true
console.log(trie2.search("cod"));         // Output: false
console.log(trie2.search("code"));        // Output: true
