// import java.io.*;
// import java.util.*;

// public class Main {
//     public static long findMaxValue(List<Integer> factor, List<List<Integer>> data, int x) {
//         int n = data.size();
//         int sumMaxElements = 0;
        
//         for (int i = 0; i < n; i++) {
//             int rowSize = data.get(i).size();
//             int fi = factor.get(i);
//             sumMaxElements += Math.min(fi, rowSize);
//         }
        
//         if (x < 0 || x > sumMaxElements) {
//             return -1;
//         }
        
//         if (x == 0) {
//             return 0;
//         }
        
//         List<List<Long>> prefixSums = new ArrayList<>();
//         for (int i = 0; i < n; i++) {
//             List<Integer> row = new ArrayList<>(data.get(i));
//             Collections.sort(row, Collections.reverseOrder());
//             int rowSize = row.size();
//             int fi = factor.get(i);
//             int kMax = Math.min(fi, rowSize);
//             List<Long> sums = new ArrayList<>();
//             sums.add(0L);
//             long currentSum = 0;
//             for (int j = 0; j < kMax; j++) {
//                 currentSum += row.get(j);
//                 sums.add(currentSum);
//             }
//             prefixSums.add(sums);
//         }
        
//         long[] dp = new long[x + 1];
//         Arrays.fill(dp, Long.MIN_VALUE);
//         dp[0] = 0;
        
//         for (int i = 0; i < n; i++) {
//             List<Long> sums = prefixSums.get(i);
//             int kMax = sums.size() - 1;
//             for (int j = x; j >= 0; j--) {
//                 if (dp[j] == Long.MIN_VALUE) {
//                     continue;
//                 }
//                 for (int k = 0; k <= kMax; k++) {
//                     int newJ = j + k;
//                     if (newJ > x) {
//                         continue;
//                     }
//                     long newSum = dp[j] + sums.get(k);
//                     if (newSum > dp[newJ]) {
//                         dp[newJ] = newSum;
//                     }
//                 }
//             }
//         }
        
//         return dp[x] != Long.MIN_VALUE ? dp[x] : -1;
//     }

//     public static void main(String[] args) throws IOException {
//         BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        
//         int n = Integer.parseInt(bufferedReader.readLine().trim());
        
//         String[] factorItems = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");
//         List<Integer> factor = new ArrayList<>();
//         for (int i = 0; i < n; i++) {
//             int factorItem = Integer.parseInt(factorItems[i]);
//             factor.add(factorItem);
//         }
        
//         List<List<Integer>> data = new ArrayList<>();
//         for (int i = 0; i < n; i++) {
//             String[] dataRowItems = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");
//             List<Integer> dataRow = new ArrayList<>();
            
//             for (int j = 0; j < dataRowItems.length; j++) {  // Changed from n to dataRowItems.length
//                 int dataItem = Integer.parseInt(dataRowItems[j]);
//                 dataRow.add(dataItem);
//             }
            
//             data.add(dataRow);
//         }
        
//         int x = Integer.parseInt(bufferedReader.readLine().trim());
        
//         long result = findMaxValue(factor, data, x);
//         System.out.println(String.valueOf(result));
        
//         bufferedReader.close();
//     }
// }

import java.util.*;

public class Main {
    public static long findMaxValue(List<Integer> factor, List<List<Integer>> data, int x) {
        int n = data.size();
        int sumMaxElements = 0;
        
        for (int i = 0; i < n; i++) {
            int rowSize = data.get(i).size();
            int fi = factor.get(i);
            sumMaxElements += Math.min(fi, rowSize);
        }
        
        if (x < 0 || x > sumMaxElements) {
            return -1;
        }
        
        if (x == 0) {
            return 0;
        }
        
        List<List<Long>> prefixSums = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            List<Integer> row = new ArrayList<>(data.get(i));
            Collections.sort(row, Collections.reverseOrder());
            int rowSize = row.size();
            int fi = factor.get(i);
            int kMax = Math.min(fi, rowSize);
            List<Long> sums = new ArrayList<>();
            sums.add(0L);
            long currentSum = 0;
            for (int j = 0; j < kMax; j++) {
                currentSum += row.get(j);
                sums.add(currentSum);
            }
            prefixSums.add(sums);
        }
        
        long[] dp = new long[x + 1];
        Arrays.fill(dp, Long.MIN_VALUE);
        dp[0] = 0;
        
        for (int i = 0; i < n; i++) {
            List<Long> sums = prefixSums.get(i);
            int kMax = sums.size() - 1;
            for (int j = x; j >= 0; j--) {
                if (dp[j] == Long.MIN_VALUE) {
                    continue;
                }
                for (int k = 0; k <= kMax; k++) {
                    int newJ = j + k;
                    if (newJ > x) {
                        continue;
                    }
                    long newSum = dp[j] + sums.get(k);
                    if (newSum > dp[newJ]) {
                        dp[newJ] = newSum;
                    }
                }
            }
        }
        
        return dp[x] != Long.MIN_VALUE ? dp[x] : -1;
    }

    public static void main(String[] args) {
        // Predefined input values
        int n = 2;
        
        // Initialize factor array
        List<Integer> factor = Arrays.asList(1, 1);
        
        // Initialize data array
        List<List<Integer>> data = new ArrayList<>();
        
        data.add(Arrays.asList(10, 10)); // Second row
        data.add(Arrays.asList(10, 10)); // Second row
        
        // Initialize x
        int x = 4;
        
        // Calculate and print the result
        long result = findMaxValue(factor, data, x);
        System.out.println(String.valueOf(result));
    }
}