import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
    public static int findScore(String userID1, String userID2, int p) {
        int n = userID1.length();
        int m = userID2.length();
        if (m == 0) return 0;

        int[] targetFreq = new int[26];
        for (char c : userID2.toCharArray()) {
            targetFreq[c - 'a']++;
        }

        int total = 0;

        for (int r = 0; r < p; r++) {
            List<Character> list = new ArrayList<>();
            for (int i = r; i < n; i += p) {
                list.add(userID1.charAt(i));
            }

            int len = list.size();
            if (len < m) continue;

            int[] currentFreq = new int[26];
            for (int i = 0; i < m; i++) {
                char c = list.get(i);
                currentFreq[c - 'a']++;
            }

            if (Arrays.equals(currentFreq, targetFreq)) {
                total++;
            }

            for (int k = 1; k <= len - m; k++) {
                char leftChar = list.get(k - 1);
                currentFreq[leftChar - 'a']--;

                char rightChar = list.get(k + m - 1);
                currentFreq[rightChar - 'a']++;

                if (Arrays.equals(currentFreq, targetFreq)) {
                    total++;
                }
            }
        }

        return total;
    }

    public static void main(String[] args) {
        // Test case 1: Sample input from the problem
        System.out.println(findScore("acaccaa", "aac", 2)); // Expected output: 2

        // Test case 2: userID2 is empty
        System.out.println(findScore("abc", "", 1)); // Expected output: 0

        // Test case 3: Exact match with rearrangement (p=1)
        System.out.println(findScore("aab", "aba", 1)); // Expected output: 1

        // Test case 4: userID2 longer than possible sequences in userID1
        System.out.println(findScore("abc", "abcd", 1)); // Expected output: 0

        // Test case 5: No matching frequency
        System.out.println(findScore("abcde", "fgh", 2)); // Expected output: 0

        // Test case 6: Another valid case with multiple residues
        System.out.println(findScore("ababab", "ab", 2)); // Expected output: 2
    }
}